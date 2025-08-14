"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Users, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

interface MembershipRequest {
  id: string // Mapped from userId
  address: string // This is beehiveLocation
  annualProduction: number
  career: number // This is experience, and should be number
  createdAt: string // Use this for submittedAt
  documents: string
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
  _links: {
    self: {
      href: string;
    };
    memberRequestList?: {
      href: string;
    };
    requestapproval?: {
      href: string;
    };
    requestdeny?: {
      href: string;
    };
    upgradetomemberrequest?: {
      href: string;
    };
  };
}

interface NectarRequest {
  id: string
  name: string
  email: string
  phone: string
  beehiveLocation: string
  nectarType: string
  quantity: number
  reason: string
  submittedAt: string
  status: "pending" | "approved" | "rejected"
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

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState<"membership" | "nectar">("membership")

  const [membershipRequests, setMembershipRequests] = useState<MembershipRequest[]>([])
  const [nectarRequests, setNectarRequests] = useState<NectarRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        if (activeTab === "membership") {
          // 1. Fetch Membership Request Lists
          const memberReqRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/memberRequestLists`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          if (!memberReqRes.ok) {
            throw new Error(`HTTP error! status: ${memberReqRes.status}`)
          }
          const memberReqJson = await memberReqRes.json()
          const rawMembershipRequests = Array.isArray(memberReqJson?._embedded?.memberRequestLists)
            ? memberReqJson._embedded.memberRequestLists
            : []
          console.log(rawMembershipRequests)
          // 2. Fetch User Data
          const userRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/users`, { // Assuming /users endpoint
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          console.log(userRes)
          if (!userRes.ok) {
            throw new Error(`HTTP error! status: ${userRes.status}`)
          }
          const userJson = await userRes.json()
          const rawUsers = Array.isArray(userJson?._embedded?.users)
            ? userJson._embedded.users
            : []
          console.log(rawUsers) // Keep console.log for debugging
          // Process rawUsers to extract userId and create User objects with userId
          const usersWithId: User[] = rawUsers.map((user: any) => {
            const selfLink = user._links?.self?.href;
            const userId = selfLink ? selfLink.substring(selfLink.lastIndexOf('/') + 1) : undefined;
            return {
              ...user,
              userId: userId,
              email: user.username // Map username to email for consistency with MembershipRequest
            } as User; // Explicitly cast to User
          });

          // Create a map for quick user lookup by userId
          const userMap = new Map(usersWithId.filter(user => user.userId).map(user => [user.userId!, user]));

          // 3. Merge data and map to MembershipRequest interface
          const combinedMembershipRequests: MembershipRequest[] = rawMembershipRequests.map((req: any) => {
            const user: User | undefined = userMap.get(req.userId); // Explicitly type user
            return {
              id: req.userId, // Use userId as id
              address: req.address,
              annualProduction: req.annualProduction,
              career: typeof req.career === 'string' ? parseInt(req.career, 10) : req.career, // Convert career to number
              createdAt: req.createdAt,
              documents: Array.isArray(req.documents)
                ? req.documents
                : (req.documents ? [{ name: req.documents }] : []), // Ensure documents is an array of objects
              etc: req.etc,
              hiveCount: req.hiveCount,
              processMessage: req.processMessage,
              status: req.status.toUpperCase() as "PENDING" | "APPROVED" | "REJECTED", // Ensure uppercase status

              // Merged from user data
              name: user?.name || 'N/A',
              email: user?.username || 'N/A', // Use user.username for email
              phone: user?.phone || 'N/A',
              role: user?.role,

              // Mapped fields for UI compatibility
              beehiveLocation: req.address, // Map address to beehiveLocation
              experience: typeof req.career === 'string' ? req.career : String(req.career), // Map career to experience (as string for display)
              submittedAt: req.createdAt, // Map createdAt to submittedAt

              // Add _links here
              _links: req._links,

              // Add additionalInfo here to match the detail page's interface
              additionalInfo: {
                beehiveCount: req.hiveCount,
                annualProduction: String(req.annualProduction), // Ensure it's a string as per interface
                cooperativeReason: req.etc
              }
            };
          });
          setMembershipRequests(combinedMembershipRequests);

        } else {
          // Fetch Nectar Request Lists (assuming similar structure and no user data needed for now)
          const nectarReqRes = await fetch(`${process.env.NEXT_PUBLIC_GW_URL}/nectarRequestLists`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          if (!nectarReqRes.ok) {
            throw new Error(`HTTP error! status: ${nectarReqRes.status}`)
          }
          const nectarReqJson = await nectarReqRes.json()
          const rawNectarRequests = Array.isArray(nectarReqJson?._embedded?.nectarRequestLists)
            ? nectarReqJson._embedded.nectarRequestLists
            : []
          setNectarRequests(rawNectarRequests as NectarRequest[])
        }
      } catch (e: any) {
        setError(e.message)
        console.error("Failed to fetch data:", e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activeTab])

  const currentRequests = activeTab === "membership" ? membershipRequests : nectarRequests
  const filteredRequests = currentRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || request.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const pendingCount = membershipRequests.filter((r) => r.status.toLowerCase() === "pending").length
  const approvedCount = membershipRequests.filter((r) => r.status.toLowerCase() === "approved").length
  const rejectedCount = membershipRequests.filter((r) => r.status.toLowerCase() === "rejected").length

  const nectarPendingCount = nectarRequests.filter((r) => r.status.toLowerCase() === "pending").length
  const nectarApprovedCount = nectarRequests.filter((r) => r.status.toLowerCase() === "approved").length
  const nectarRejectedCount = nectarRequests.filter((r) => r.status.toLowerCase() === "rejected").length

  const getStatusBadge = (status: string) => {
    const lowerCaseStatus = status.toLowerCase();
    switch (lowerCaseStatus) {
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            <Clock className="h-3 w-3 mr-1" />
            대기중
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            승인
          </Badge>
        )
      case "rejected":
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">관리자 대시보드</h1>
          <p className="text-gray-600">조합원 가입 요청과 밀원수 지원 요청을 관리할 수 있습니다.</p>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("membership")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "membership"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                조합원 가입 요청
              </button>
              <button
                onClick={() => setActiveTab("nectar")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "nectar"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                밀원수 지원 요청
              </button>
            </nav>
          </div>
        </div>

        {loading && (
          <>
            {/* Skeleton for Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <Skeleton className="h-8 w-16" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skeleton for Filter and Search Card */}
            <Card className="mb-6">
              <CardContent className="px-6 py-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-full sm:w-48" />
                </div>
              </CardContent>
            </Card>

            {/* Skeleton for Request List Card */}
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-64" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => ( // Show 3 skeleton list items
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-6 w-48" />
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        </div>
                        <Skeleton className="h-10 w-24" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
        {error && (
          <div className="text-center py-8 text-red-600 text-lg">
            데이터를 불러오는데 실패했습니다: {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">전체 요청</p>
                      <p className="text-2xl font-bold text-gray-900">{currentRequests.length}</p>
                    </div>
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">대기중</p>
                      <p className="text-2xl font-bold text-amber-600">
                        {activeTab === "membership" ? pendingCount : nectarPendingCount}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-amber-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">승인됨</p>
                      <p className="text-2xl font-bold text-green-600">
                        {activeTab === "membership" ? approvedCount : nectarApprovedCount}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">거부됨</p>
                      <p className="text-2xl font-bold text-red-600">
                        {activeTab === "membership" ? rejectedCount : nectarRejectedCount}
                      </p>
                    </div>
                    <XCircle className="h-8 w-8 text-red-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 필터 및 검색 */}
            <Card className="mb-6">
              <CardContent className="px-6 py-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="이름 또는 이메일로 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="상태 필터" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      <SelectItem value="pending">대기중</SelectItem>
                      <SelectItem value="approved">승인됨</SelectItem>
                      <SelectItem value="rejected">거부됨</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{activeTab === "membership" ? "조합원 가입 요청 목록" : "밀원수 지원 요청 목록"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredRequests.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">검색 결과가 없습니다.</div>
                  ) : (
                    filteredRequests.map((request) => (
                      <div key={request.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{request.name}</h3>
                              {getStatusBadge(request.status)}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                              <div>📧 {request.email}</div>
                              <div>📞 {request.phone}</div>
                              <div>📍 {request.beehiveLocation?.split(' ').slice(0, 2).join(' ')}</div>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                              {activeTab === "membership" ? (
                                <>
                                  <span>경력: {(request as MembershipRequest).experience}</span>
                                  <span>신청일: {request.submittedAt}</span>
                                </>
                              ) : (
                                <>
                                  <span>밀원수: {(request as NectarRequest).nectarType}</span>
                                  <span>수량: {(request as NectarRequest).quantity}그루</span>
                                  <span>신청일: {request.submittedAt}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="ml-4">
                            <Link
                              href={
                                activeTab === "membership"
                                  ? `/admin/membership-requests/${request._links.self.href.substring(request._links.self.href.lastIndexOf('/') + 1)}`
                                  : `/admin/nectar-requests/${request.id}`
                              }
                            >
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                상세보기
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
