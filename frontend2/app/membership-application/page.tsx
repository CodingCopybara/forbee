"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, MapPin, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MembershipApplication() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    detailAddress: "",
    experience: "",
    hiveCount: "",
    notes: "",
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]
      if (allowedTypes.includes(file.type)) {
        setUploadedFile(file)
      } else {
        alert("JPG, PNG, PDF 파일만 업로드 가능합니다.")
      }
    }
  }

  const openDaumPostcode = () => {
    // 다음 주소검색 API 연동 (실제 구현시 daum postcode script 필요)
    alert("다음 주소검색 API 연동 예정")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 제출 로직 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h2>
              <p className="text-gray-600 mb-6">
                양봉농협 조합원 신청서가 성공적으로 제출되었습니다.
                <br />
                검토 후 3-5일 내에 연락드리겠습니다.
              </p>
              <Button onClick={() => (window.location.href = "/mypage")} className="bg-amber-500 hover:bg-amber-600">
                마이페이지로 돌아가기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">양봉농협 조합원 신청</h1>
          <p className="text-gray-600">양봉농협과 함께 더 나은 양봉 환경을 만들어가세요</p>
        </div>

        {/* Benefits */}
        <Card className="mb-8 border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
          <CardHeader>
            <CardTitle className="text-xl text-amber-800">조합원 혜택</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900">전문가 상담</h3>
                <p className="text-sm text-gray-600">1:1 맞춤 상담 서비스</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Badge className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900">장비 할인</h3>
                <p className="text-sm text-gray-600">양봉 장비 최대 20% 할인</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900">판매 지원</h3>
                <p className="text-sm text-gray-600">꿀 판매 채널 연결</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>신청서 작성</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">개인정보</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">이름 *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">양봉장 주소</h3>

                <div>
                  <Label htmlFor="address">주소 *</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="주소 검색을 클릭해주세요"
                      required
                      readOnly
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      onClick={openDaumPostcode}
                      variant="outline"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      주소 검색
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="detailAddress">상세주소</Label>
                  <Input
                    id="detailAddress"
                    name="detailAddress"
                    value={formData.detailAddress}
                    onChange={handleInputChange}
                    placeholder="상세주소를 입력해주세요"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Beekeeping Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">양봉 정보</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">양봉 경력 (년) *</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="number"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hiveCount">보유 벌통 수 *</Label>
                    <Input
                      id="hiveCount"
                      name="hiveCount"
                      type="number"
                      value={formData.hiveCount}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">기타 사항</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="추가로 전달하고 싶은 내용이 있으시면 작성해주세요"
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">서류 첨부</h3>

                <div>
                  <Label htmlFor="certificate">양봉농가등록증 *</Label>
                  <div className="mt-2">
                    <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                      <input
                        id="certificate"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        required
                      />
                      <label htmlFor="certificate" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                        <p className="text-gray-600">
                          {uploadedFile ? uploadedFile.name : "파일을 선택하거나 드래그해주세요"}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG, PDF (최대 10MB)</p>
                      </label>
                    </div>
                    {uploadedFile && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        파일이 선택되었습니다: {uploadedFile.name}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      신청서 제출 중...
                    </>
                  ) : (
                    "조합원 신청하기"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Notice */}
        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">신청 안내</p>
                <ul className="space-y-1">
                  <li>• 신청서 검토 후 3-5일 내에 연락드립니다</li>
                  <li>• 양봉농가등록증은 필수 제출 서류입니다</li>
                  <li>• 추가 서류가 필요한 경우 별도 안내드립니다</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
