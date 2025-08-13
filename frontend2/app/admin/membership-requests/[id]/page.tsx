"use client"

import { useState } from "react"
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

interface MembershipRequest {
  id: string
  name: string
  email: string
  phone: string
  beehiveLocation: string
  experience: string
  submittedAt: string
  status: "pending" | "approved" | "rejected"
  documents: {
    name: string
    url: string
    type: string
  }[]
  additionalInfo: {
    beehiveCount: number
    annualProduction: string
    cooperativeReason: string
  }
}

export default function MembershipRequestDetail() {
  const params = useParams()
  const router = useRouter()
  const [adminNote, setAdminNote] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const request: MembershipRequest = {
    id: params.id as string,
    name: "김양봉",
    email: "kim@example.com",
    phone: "010-1234-5678",
    beehiveLocation: "경기도 양평군 용문면 양평로 123",
    experience: "5년",
    submittedAt: "2024-01-15",
    status: "pending",
    documents: [
      {
        name: "양봉농가등록증.pdf",
        url: "/documents/beekeeping-certificate.pdf",
        type: "pdf",
      },
    ],
    additionalInfo: {
      beehiveCount: 15,
      annualProduction: "약 300kg",
      cooperativeReason:
        "양봉 기술 향상과 판로 확보를 위해 조합원이 되고 싶습니다. 특히 AI 기술을 활용한 질병 진단 서비스에 관심이 많습니다.",
    },
  }

  const handleApprove = async () => {
    setIsProcessing(true)
    // 실제로는 API 호출
    setTimeout(() => {
      alert("조합원 가입이 승인되었습니다.")
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
      alert("조합원 가입이 거부되었습니다.")
      setIsProcessing(false)
      router.push("/admin")
    }, 1000)
  }

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
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
            {getStatusBadge(request.status)}
          </div>
        </div>

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
                    <p className="text-lg font-semibold">{request.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">양봉 경력</label>
                    <p className="text-lg font-semibold">{request.experience}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-gray-400" />
                    <span>{request.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-gray-400" />
                    <span>{request.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                    <span>{request.beehiveLocation}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                    <span>신청일: {request.submittedAt}</span>
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
                    <p className="text-lg font-semibold">{request.additionalInfo.beehiveCount}개</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">연간 생산량</label>
                    <p className="text-lg font-semibold">{request.additionalInfo.annualProduction}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">조합 가입 사유</label>
                  <p className="mt-2 p-3 bg-gray-50 rounded-lg text-gray-700">
                    {request.additionalInfo.cooperativeReason}
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
                  {request.documents.map((doc, index) => (
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 사이드바 - 승인/거부 */}
          <div className="space-y-6">
            {request.status === "pending" && (
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

            {request.status !== "pending" && (
              <Card>
                <CardHeader>
                  <CardTitle>처리 완료</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    {getStatusBadge(request.status)}
                    <p className="text-sm text-gray-600 mt-2">이 요청은 이미 처리되었습니다.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
