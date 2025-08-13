"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Users, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

interface MembershipRequest {
  id: string
  name: string
  email: string
  phone: string
  beehiveLocation: string
  experience: string
  submittedAt: string
  status: "pending" | "approved" | "rejected"
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

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState<"membership" | "nectar">("membership")

  const [requests] = useState<MembershipRequest[]>([
    {
      id: "1",
      name: "김양봉",
      email: "kim@example.com",
      phone: "010-1234-5678",
      beehiveLocation: "경기도 양평군",
      experience: "5년",
      submittedAt: "2024-01-15",
      status: "pending",
    },
    {
      id: "2",
      name: "이꿀벌",
      email: "lee@example.com",
      phone: "010-2345-6789",
      beehiveLocation: "강원도 홍천군",
      experience: "3년",
      submittedAt: "2024-01-14",
      status: "pending",
    },
    {
      id: "3",
      name: "박밀원",
      email: "park@example.com",
      phone: "010-3456-7890",
      beehiveLocation: "충북 괴산군",
      experience: "10년",
      submittedAt: "2024-01-13",
      status: "approved",
    },
    {
      id: "4",
      name: "최벌통",
      email: "choi@example.com",
      phone: "010-4567-8901",
      beehiveLocation: "전남 구례군",
      experience: "1년",
      submittedAt: "2024-01-12",
      status: "rejected",
    },
  ])

  const [nectarRequests] = useState<NectarRequest[]>([
    {
      id: "1",
      name: "김양봉",
      email: "kim@example.com",
      phone: "010-1234-5678",
      beehiveLocation: "경기도 양평군",
      nectarType: "아카시아",
      quantity: 50,
      reason: "새로운 양봉장 조성을 위해 밀원수가 필요합니다.",
      submittedAt: "2024-01-15",
      status: "pending",
    },
    {
      id: "2",
      name: "이꿀벌",
      email: "lee@example.com",
      phone: "010-2345-6789",
      beehiveLocation: "강원도 홍천군",
      nectarType: "개나리",
      quantity: 30,
      reason: "기존 밀원수 보충이 필요합니다.",
      submittedAt: "2024-01-14",
      status: "approved",
    },
    {
      id: "3",
      name: "박밀원",
      email: "park@example.com",
      phone: "010-3456-7890",
      beehiveLocation: "충북 괴산군",
      nectarType: "벚꽃",
      quantity: 100,
      reason: "관광 양봉장 조성 프로젝트",
      submittedAt: "2024-01-13",
      status: "pending",
    },
  ])

  const currentRequests = activeTab === "membership" ? requests : nectarRequests
  const filteredRequests = currentRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const pendingCount = requests.filter((r) => r.status === "pending").length
  const approvedCount = requests.filter((r) => r.status === "approved").length
  const rejectedCount = requests.filter((r) => r.status === "rejected").length

  const nectarPendingCount = nectarRequests.filter((r) => r.status === "pending").length
  const nectarApprovedCount = nectarRequests.filter((r) => r.status === "approved").length
  const nectarRejectedCount = nectarRequests.filter((r) => r.status === "rejected").length

  const getStatusBadge = (status: string) => {
    switch (status) {
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
          <CardContent className="p-6">
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
                          <div>📍 {request.beehiveLocation}</div>
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
                              ? `/admin/membership-requests/${request.id}`
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
      </div>
    </div>
  )
}
