"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Download,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

interface MembershipRequest {
  id: string // Mapped from userId
  address: string // This is beehiveLocation
  annualProduction: number
  career: number // This is experience, and should be number
  createdAt: string // Use this for submittedAt
  documents: { name: string; url?: string }[];
  etc: string
  hiveCount: number
  processMessage: string | null
  status: "PENDING" | "APPROVED" | "REJECTED" // API status casing
  userId: string

  // Fields from /users (merged)
  name: string
  email: string
  phone: string
  role?: string // Assuming role might come from /users

  // Mapped fields for UI compatibility
  beehiveLocation: string // Mapped from address
  experience: string // Mapped from career (will convert number to string for display)
  submittedAt: string // Mapped from createdAt

  // Additional fields specific to detail page or not in list
  additionalInfo: {
    beehiveCount: number
    annualProduction: string
    cooperativeReason: string
  }
}

interface User {
  name: string;
  phone: string;
  role: string;
  username: string; // This will be the email
  _links: {
    self: {
      href: string; // e.g., 'http://localhost:8084/users/1755068157561'
    };
    // ... other links
  };
  userId?: string; // Added after parsing from href
}

export default function MembershipRequestDetail() {
  const params = useParams()
  const router = useRouter()
  const requestId = params.id as string;
  const [adminNote, setAdminNote] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const [requestData, setRequestData] = useState<MembershipRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequestDetail = async () => {
      if (!requestId) return; // Ensure requestId exists

      setLoading(true);
      setError(null);

      try {
        // 1. Fetch Membership Request Detail using requestId (which is userId)
        const memberReqRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/memberRequestLists/${requestId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        if (!memberReqRes.ok) {
          throw new Error(`HTTP error! status: ${memberReqRes.status}`);
        }
        const rawRequestDetail = await memberReqRes.json();
        // console.log(rawRequestDetail)

        // Extract userId from rawRequestDetail
        const userId = rawRequestDetail.userId;

        let user: User | undefined;
        if (userId) {
          // 2. Fetch specific User Data using userId
          const userRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/users/${userId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          // console.log(await userRes.json())
          if (!userRes.ok) {
            // Handle case where user might not be found or error fetching user
            console.warn(`Failed to fetch user details for userId: ${userId}, status: ${userRes.status}`);
            user = undefined; // Set user to undefined if fetch fails
          } else {
            user = await userRes.json();
            // Ensure user object has userId and email (username) for consistency
            if (user) {
              const selfLink = user._links?.self?.href;
              user.userId = selfLink ? selfLink.substring(selfLink.lastIndexOf('/') + 1) : undefined;
              // user.email = user.username; // Assuming username is email
            }
          }
        }

        // 3. Merge data and map to MembershipRequest interface
        const mergedRequest: MembershipRequest = {
          id: rawRequestDetail.userId,
          address: rawRequestDetail.address,
          annualProduction: rawRequestDetail.annualProduction,
          career: typeof rawRequestDetail.career === 'string' ? parseInt(rawRequestDetail.career, 10) : rawRequestDetail.career,
          createdAt: rawRequestDetail.createdAt,
          documents: Array.isArray(rawRequestDetail.documents)
            ? rawRequestDetail.documents
            : (rawRequestDetail.documents ? [{ name: rawRequestDetail.documents, url: rawRequestDetail.documents }] : []),
          etc: rawRequestDetail.etc,
          hiveCount: rawRequestDetail.hiveCount,
          processMessage: rawRequestDetail.processMessage,
          status: rawRequestDetail.status.toUpperCase() as "PENDING" | "APPROVED" | "REJECTED",
          userId: rawRequestDetail.userId,

          name: user?.name || 'N/A',
          email: user?.username || 'N/A',
          phone: user?.phone || 'N/A',
          role: user?.role,

          beehiveLocation: rawRequestDetail.address,
          experience: typeof rawRequestDetail.career === 'string' ? rawRequestDetail.career : String(rawRequestDetail.career),
          submittedAt: rawRequestDetail.createdAt,

          // Additional info from the detail API response
          additionalInfo: {
            beehiveCount: rawRequestDetail.hiveCount,
            annualProduction: String(rawRequestDetail.annualProduction), // Ensure it's a string as per interface
            cooperativeReason: rawRequestDetail.etc
          }
        };
        setRequestData(mergedRequest);

      } catch (e: any) {
        setError(e.message);
        console.error("Failed to fetch request detail:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestDetail();
  }, [requestId]); // Depend on requestId

  const handleApprove = async () => {
    if (!requestData) return; // Ensure requestData is available
    setIsProcessing(true);
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/memberRequestLists/${requestId}/requestapproval`, {
        method: 'PUT', // Assuming PATCH for partial update
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ status: 'APPROVED', processMessage: adminNote || null })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("조합원 가입이 승인되었습니다.");
      router.push("/admin");
    } catch (error: any) {
      alert(`승인 처리 중 오류가 발생했습니다: ${error.message}`);
      console.error("Failed to approve request:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!adminNote.trim()) {
      alert("거부 사유를 입력해주세요.");
      return;
    }
    if (!requestData) return; // Ensure requestData is available
    setIsProcessing(true);
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/memberRequestLists/${requestId}/requestdeny`, {
        method: 'PUT', // Assuming PATCH for partial update
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ status: 'REJECTED', processMessage: adminNote })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("조합원 가입이 거부되었습니다.");
      router.push("/admin");
    } catch (error: any) {
      alert(`거부 처리 중 오류가 발생했습니다: ${error.message}`);
      console.error("Failed to reject request:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            <Clock className="h-3 w-3 mr-1" />
            대기중
          </Badge>
        )
      case "APPROVED":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            승인
          </Badge>
        )
      case "REJECTED":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            <XCircle className="h-3 w-3 mr-1" />
            거부
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header always visible */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            관리자 대시보드로 돌아가기
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">조합원 가입 요청 상세</h1>
              <p className="text-gray-600">신청자 정보를 검토하고 승인 여부를 결정하세요.</p>
            </div>
            {loading && <Skeleton className="h-8 w-24" />}
            {error && <Badge variant="destructive">오류: {error}</Badge>}
            {requestData && getStatusBadge(requestData.status)}
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column Skeletons */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-48" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-48" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-64" />
                    <Skeleton className="h-4 w-64" />
                    <Skeleton className="h-4 w-64" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </CardContent>
              </Card>

              {/* Beekeeping Info Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-48" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-48" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Submitted Documents Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column Skeleton (for action card) */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 text-lg mt-8">
            데이터를 불러오는 데 실패했습니다. {error}
          </div>
        )}

        {!loading && !error && !requestData && (
          <div className="text-center text-gray-600 text-lg mt-8">
            요청 데이터를 찾을 수 없습니다.
          </div>
        )}

        {requestData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 메인 정보 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 기본 정보 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    기본 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">이름</label>
                      <p className="text-lg font-semibold">{requestData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">양봉 경력</label>
                      <p className="text-lg font-semibold">{requestData.experience} 년</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-gray-400" />
                      <span>{requestData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-gray-400" />
                      <span>{requestData.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                      <span>{requestData.beehiveLocation}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                      <span>신청일: {requestData.submittedAt}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 양봉 정보 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    양봉 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">보유 벌통 수</label>
                      <p className="text-lg font-semibold">{requestData.additionalInfo.beehiveCount}개</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">연간 생산량</label>
                      <p className="text-lg font-semibold">{requestData.additionalInfo.annualProduction}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">조합 가입 사유</label>
                    <p className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-700">
                      {requestData.additionalInfo.cooperativeReason}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 제출 서류 */}
              <Card>
                <CardHeader>
                  <CardTitle>제출 서류</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requestData.documents && requestData.documents.length > 0 ? (
                      requestData.documents.map((doc: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center mr-3">
                              <span className="text-red-600 text-xs font-bold">PDF</span>
                            </div>
                            <span className="font-medium">{doc.name}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            다운로드
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">제출된 서류가 없습니다.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 사이드바 - 승인/거부 */}
            <div className="space-y-6">
              {requestData.status === "PENDING" && ( // Use PENDING as per API
                <Card>
                  <CardHeader>
                    <CardTitle>승인/거부 처리</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-2 block">관리자 메모 (거부 시 필수)</label>
                      <Textarea
                        placeholder="승인/거부 사유를 입력하세요..."
                        value={adminNote}
                        onChange={(e) => setAdminNote(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={handleApprove}
                        disabled={isProcessing}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {isProcessing ? "처리중..." : "승인"}
                      </Button>

                      <Button
                        onClick={handleReject}
                        disabled={isProcessing}
                        variant="outline"
                        className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        {isProcessing ? "처리중..." : "거부"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {requestData.status !== "PENDING" && ( // Use PENDING as per API
                <Card>
                  <CardHeader>
                    <CardTitle>처리 완료</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      {getStatusBadge(requestData.status)}
                    <p className="text-sm text-gray-600 mt-2">이 요청은 이미 처리되었습니다.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
