"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, XCircle, Clock, Download, MapPin, Leaf, Package } from "lucide-react"
import Link from "next/link"

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
  documents?: string[]
}

export default function NectarRequestDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [adminNote, setAdminNote] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const request: NectarRequest = {
    id: params.id as string,
    name: "김양봉",
    email: "kim@example.com",
    phone: "010-1234-5678",
    beehiveLocation: "경기도 양평군 용문면 용문산로 123",
    nectarType: "아카시아",
    quantity: 50,
    reason:
      "새로운 양봉장 조성을 위해 밀원수가 필요합니다. 현재 2헥타르 규모의 부지를 확보했으며, 주변 환경이 양봉에 적합하여 아카시아 나무 50그루 정도가 필요한 상황입니다.",
    submittedAt: "2024-01-15",
    status: "pending",
    documents: ["신청서.pdf", "부지_사진.jpg", "사업계획서.pdf"],
  }

  const handleApprove = async () => {
    setIsProcessing(true)
    // 실제로는 API 호출
    setTimeout(() => {
      alert("밀원수 지원 요청이 승인되었습니다.")
      setIsProcessing(false)
      router.push("/admin")
    }, 1000)
  }

  const handleReject = async () => {
    if (!adminNote.trim()) {
      alert("거부 사유를 입력해주세요.")
      return
    }
    setIsProcessing(true)
    // 실제로는 API 호출
    setTimeout(() => {
      alert("밀원수 지원 요청이 거부되었습니다.")
      setIsProcessing(false)
      router.push("/admin")
    }, 1000)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            <Clock className="h-4 w-4 mr-1" />
            대기중
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            승인됨
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            <XCircle className="h-4 w-4 mr-1" />
            거부됨
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            관리자 대시보드로 돌아가기
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">밀원수 지원 요청 상세</h1>
              <p className="text-gray-600 mt-2">요청 ID: {request.id}</p>
            </div>
            {getStatusBadge(request.status)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 정보 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 신청자 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                  신청자 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">이름</label>
                    <p className="text-lg font-semibold">{request.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">이메일</label>
                    <p className="text-lg">{request.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">연락처</label>
                    <p className="text-lg">{request.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">신청일</label>
                    <p className="text-lg">{request.submittedAt}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">양봉장 위치</label>
                  <p className="text-lg">{request.beehiveLocation}</p>
                </div>
              </CardContent>
            </Card>

            {/* 밀원수 요청 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-600" />
                  밀원수 요청 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">밀원수 종류</label>
                    <p className="text-lg font-semibold text-green-600">{request.nectarType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">요청 수량</label>
                    <p className="text-lg font-semibold">{request.quantity}그루</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">신청 사유</label>
                  <p className="text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-lg">{request.reason}</p>
                </div>
              </CardContent>
            </Card>

            {/* 첨부 서류 */}
            {request.documents && request.documents.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2 text-blue-600" />
                    첨부 서류
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {request.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{doc}</span>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          다운로드
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 사이드바 - 관리자 액션 */}
          <div className="space-y-6">
            {request.status === "pending" && (
              <Card>
                <CardHeader>
                  <CardTitle>관리자 액션</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleApprove}
                    disabled={isProcessing}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isProcessing ? "처리중..." : "승인"}
                  </Button>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">거부 사유 (선택사항)</label>
                    <Textarea
                      placeholder="거부하는 경우 사유를 입력해주세요..."
                      value={adminNote}
                      onChange={(e) => setAdminNote(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button
                    onClick={handleReject}
                    disabled={isProcessing}
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    {isProcessing ? "처리중..." : "거부"}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* 요청 요약 */}
            <Card>
              <CardHeader>
                <CardTitle>요청 요약</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">상태</span>
                  {getStatusBadge(request.status)}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">밀원수</span>
                  <span className="font-medium">{request.nectarType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">수량</span>
                  <span className="font-medium">{request.quantity}그루</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">신청일</span>
                  <span className="font-medium">{request.submittedAt}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
