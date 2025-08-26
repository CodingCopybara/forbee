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
  Leaf,
} from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

interface UploadedFile {
  url: string;
  filename: string;
}

// 상세 페이지에서 사용할 데이터 인터페이스
interface NectarRequest {
  id: number;
  userId: number;
  applicantName: string;
  phone: string;
  apiaryAddress: string;
  desiredFlora: string;
  desiredQty: number;
  reason?: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  photoUrls?: string; // DB에는 JSON 문자열로 저장

  // /users 에서 병합된 필드
  name: string;
  email: string;

  // UI 호환성을 위한 매핑 필드
  beehiveLocation: string;
  nectarType: string;
  quantity: number;
  submittedAt: string;
  documents: UploadedFile[]; // JSON 문자열을 파싱한 객체 배열
}

// 사용자 정보 인터페이스
interface User {
  name: string;
  phone: string;
  role: string;
  username: string; // email
  userId?: string;
}

export default function NectarRequestDetail() {
  const params = useParams()
  const router = useRouter()
  const requestId = params.id as string;
  const [adminNote, setAdminNote] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const [requestData, setRequestData] = useState<NectarRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequestDetail = async () => {
      if (!requestId) return;

      setLoading(true);
      setError(null);

      try {
        // 1. Nectar(Tree) 요청 상세 정보 가져오기
        const nectarReqRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/trees/${requestId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        if (!nectarReqRes.ok) {
          throw new Error(`HTTP error! status: ${nectarReqRes.status}`);
        }
        const rawRequestDetail = await nectarReqRes.json();

        const userId = rawRequestDetail.userId;
        let user: User | undefined;

        if (userId) {
          // 2. 사용자 정보 가져오기
          const userRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/users/${userId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          if (!userRes.ok) {
            console.warn(`Failed to fetch user details for userId: ${userId}, status: ${userRes.status}`);
          } else {
            user = await userRes.json();
          }
        }

        // 3. 데이터 병합 및 매핑
        const mergedRequest: NectarRequest = {
          id: rawRequestDetail.id,
          userId: rawRequestDetail.userId,
          applicantName: rawRequestDetail.applicantName,
          phone: rawRequestDetail.phone,
          apiaryAddress: rawRequestDetail.apiaryAddress,
          desiredFlora: rawRequestDetail.desiredFlora,
          desiredQty: rawRequestDetail.desiredQty,
          reason: rawRequestDetail.reason,
          status: rawRequestDetail.status.toUpperCase() as "PENDING" | "APPROVED" | "REJECTED",
          createdAt: rawRequestDetail.createdAt,
          photoUrls: rawRequestDetail.photoUrls,

          name: user?.name || rawRequestDetail.applicantName || 'N/A',
          email: user?.username || 'N/A',

          beehiveLocation: rawRequestDetail.apiaryAddress,
          nectarType: rawRequestDetail.desiredFlora,
          quantity: rawRequestDetail.desiredQty,
          submittedAt: rawRequestDetail.createdAt,
          documents: rawRequestDetail.photoUrls ? JSON.parse(rawRequestDetail.photoUrls) : [],
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
  }, [requestId]);

  const handleApprove = async () => {
    setIsProcessing(true);
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/trees/${requestId}/approve`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ status: 'APPROVED', processMessage: adminNote || '승인되었습니다.' })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("밀원수 지원 요청이 승인되었습니다.");
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
    setIsProcessing(true);
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/trees/${requestId}/deny`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ status: 'REJECTED', processMessage: adminNote })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("밀원수 지원 요청이 거부되었습니다.");
      router.push("/admin");
    } catch (error: any) {
      alert(`거부 처리 중 오류가 발생했습니다: ${error.message}`);
      console.error("Failed to reject request:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleDownload = async (docUrl: string, docName: string) => {
    if (!docUrl || !docName) {
      alert("다운로드할 파일 정보가 없습니다.");
      return;
    }
    try {
      const response = await fetch(docUrl, {
        headers: {
          // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (!response.ok) throw new Error('파일 다운로드에 실패했습니다.');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = docName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      alert('파일을 다운로드하는 데 실패했습니다.');
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
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            관리자 대시보드로 돌아가기
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">밀원수 지원 요청 상세</h1>
              <p className="text-gray-600">신청자 정보를 검토하고 승인 여부를 결정하세요.</p>
            </div>
            {loading && <Skeleton className="h-8 w-24" />}
            {error && <Badge variant="destructive">오류: {error}</Badge>}
            {requestData && getStatusBadge(requestData.status)}
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card><CardHeader><Skeleton className="h-6 w-32" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
              <Card><CardHeader><Skeleton className="h-6 w-32" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
            </div>
            <div className="space-y-6">
              <Card><CardHeader><Skeleton className="h-6 w-48" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-24 w-full" /><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></CardContent></Card>
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
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center"><User className="h-5 w-5 mr-2" />신청자 정보</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium text-gray-600">이름</label><p className="text-lg font-semibold">{requestData.name}</p></div>
                    <div><label className="text-sm font-medium text-gray-600">신청일</label><p className="text-lg font-semibold">{requestData.submittedAt.substring(0, 10)}</p></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center"><Mail className="h-4 w-4 mr-3 text-gray-400" /><span>{requestData.email}</span></div>
                    <div className="flex items-center"><Phone className="h-4 w-4 mr-3 text-gray-400" /><span>{requestData.phone.substring(0,3)}-{requestData.phone.substring(3, 7)}-{requestData.phone.substring(7, 11)}</span></div>
                    <div className="flex items-center"><MapPin className="h-4 w-4 mr-3 text-gray-400" /><span>{requestData.beehiveLocation}</span></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="flex items-center"><Leaf className="h-5 w-5 mr-2" />밀원수 요청 정보</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium text-gray-600">밀원수 종류</label><p className="text-lg font-semibold">{requestData.nectarType}</p></div>
                    <div><label className="text-sm font-medium text-gray-600">요청 수량</label><p className="text-lg font-semibold">{requestData.quantity} 그루</p></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">신청 사유</label>
                    <p className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-700">{requestData.reason || "작성된 사유가 없습니다."}</p>
                  </div>
                </CardContent>
              </Card>

              {requestData.documents && requestData.documents.length > 0 && (
                <Card>
                  <CardHeader><CardTitle>첨부 서류</CardTitle></CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {requestData.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="font-medium">{doc.filename}</span>
                          <Button variant="outline" size="sm" onClick={() => handleDownload(doc.url, doc.filename)}><Download className="h-4 w-4 mr-2" />다운로드</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              {requestData.status === "PENDING" && (
                <Card>
                  <CardHeader><CardTitle>승인/거부 처리</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-2 block">관리자 메모 (거부 시 필수)</label>
                      <Textarea placeholder="승인/거부 사유를 입력하세요..." value={adminNote} onChange={(e) => setAdminNote(e.target.value)} rows={4} />
                    </div>
                    <div className="space-y-3">
                      <Button onClick={handleApprove} disabled={isProcessing} className="w-full bg-green-600 hover:bg-green-700"><CheckCircle className="h-4 w-4 mr-2" />{isProcessing ? "처리중..." : "승인"}</Button>
                      <Button onClick={handleReject} disabled={isProcessing} variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"><XCircle className="h-4 w-4 mr-2" />{isProcessing ? "처리중..." : "거부"}</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {requestData.status !== "PENDING" && (
                <Card>
                  <CardHeader><CardTitle>처리 완료</CardTitle></CardHeader>
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