"use client"

import type React from "react"
import Script from "next/script"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, MapPin, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

declare global {
  interface Window {
    daum: any;
  }
}

/** ============== 커스텀 Alert 모달 (디자인 고정) ============== */
function AlertModal({ message, onClose }: { message: string; onClose: () => void }) {
  if (!message) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl border">
        <div className="px-5 py-4 border-b">
          <h3 className="text-base font-semibold">알림</h3>
        </div>
        <div className="px-5 py-6 text-gray-800 whitespace-pre-wrap break-words">{message}</div>
        <div className="px-5 py-4 border-t flex justify-end">
          <Button onClick={onClose} className="bg-amber-500 hover:bg-amber-600 text-white">확인</Button>
        </div>
      </div>
    </div>
  )
}
/** ============================================================ */

export default function MembershipApplication() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zonecode: "",
    address: "",
    detailAddress: "",
    experience: "",
    hiveCount: "",
    annualProduction: "",
    notes: "",
  })

  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<{ url: string; name: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 모달 알림 상태 + 후속 동작 콜백
  const [alertMsg, setAlertMsg] = useState("")
  const alertNextRef = useRef<null | (() => void)>(null)
  const showAlert = (msg: string, next?: () => void) => {
    setAlertMsg(msg)
    alertNextRef.current = next || null
  }
  const closeAlert = () => {
    setAlertMsg("")
    const cb = alertNextRef.current
    alertNextRef.current = null
    if (cb) cb()
  }

  useEffect(() => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("username")
    const phone = localStorage.getItem("phone")
    if (name && email && phone) {
      setFormData(prev => ({ ...prev, name, email, phone }))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]
    if (!allowedTypes.includes(file.type)) {
      showAlert("JPG, PNG, PDF 파일만 업로드 가능합니다.")
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      showAlert("파일 용량은 최대 10MB까지 가능합니다.")
      return
    }

    setIsUploading(true)
    const uploadFormData = new FormData()
    uploadFormData.append("file", file)

    try {
      const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL
      const accessToken = localStorage.getItem("accessToken")

      if (!gatewayUrl) {
        showAlert("업로드 서버 주소가 설정되지 않았습니다. 관리자에게 문의하세요.")
        return
      }

      if (!accessToken) {
        showAlert("로그인 정보가 없습니다. 다시 로그인해 주세요.", () => {
          window.location.href = "/login"
        })
        return
      }

      const response = await fetch(`${gatewayUrl}/files/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: uploadFormData,
      })

      if (!response.ok) {
        const err = await response.text().catch(() => "")
        showAlert(err || "파일 업로드에 실패했습니다.")
        return
      }

      const result = await response.json()
      if (!result?.url) {
        showAlert("업로드 응답이 올바르지 않습니다.")
        return
      }

      setUploadedFile({ url: result.url, name: file.name })
      showAlert("파일이 성공적으로 업로드되었습니다.")
    } catch (error: any) {
      console.error("파일 업로드 실패:", error)
      showAlert(error?.message || "파일 업로드 중 오류가 발생했습니다.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleAddressSearch = () => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function (data: any) {
          setFormData(prev => ({ ...prev, zonecode: data.zonecode, address: data.address }))
        },
      }).open()
    } else {
      showAlert("주소 검색 스크립트가 아직 로드되지 않았습니다. 잠시 후 다시 시도해 주세요.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔒 로그인 토큰/사용자 확인
    const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL
    const accessToken = localStorage.getItem("accessToken")
    const userId = localStorage.getItem("userIdentifier")

    if (!gatewayUrl) {
      showAlert("서버 주소가 설정되지 않았습니다. 관리자에게 문의하세요.")
      return
    }

    if (!accessToken || !userId) {
      showAlert("로그인 정보가 없습니다. 다시 로그인해 주세요.", () => {
        window.location.href = "/login"
      })
      return
    }

    // 🧪 필수 항목 검증 (브라우저 기본 검증 대신 모달 알림 사용)
    const missing: string[] = []
    if (!formData.name) missing.push("이름")
    if (!formData.phone) missing.push("연락처")
    if (!formData.email) missing.push("이메일")
    if (!formData.zonecode) missing.push("우편번호")
    if (!formData.address) missing.push("주소")

    const exp = Number(formData.experience)
    const hive = Number(formData.hiveCount)
    const annual = Number(formData.annualProduction)

    if (!formData.experience) missing.push("양봉 경력")
    if (!formData.hiveCount) missing.push("보유 벌통 수")
    if (!formData.annualProduction) missing.push("연간 꿀 생산량")

    if (missing.length > 0) {
      showAlert(`다음 항목을 입력해 주세요.\n- ${missing.join("\n- ")}`)
      return
    }

    if (Number.isNaN(exp) || exp < 0) {
      showAlert("양봉 경력은 0 이상의 숫자로 입력해 주세요.")
      return
    }
    if (Number.isNaN(hive) || hive <= 0) {
      showAlert("보유 벌통 수는 1 이상의 숫자로 입력해 주세요.")
      return
    }
    if (Number.isNaN(annual) || annual < 0) {
      showAlert("연간 꿀 생산량은 0 이상의 숫자로 입력해 주세요.")
      return
    }

    if (!uploadedFile) {
      showAlert("양봉농가등록증 파일을 업로드해 주세요.")
      return
    }

    setIsSubmitting(true)

    try {
      const finalSubmission = {
        userId: userId,
        address: `${formData.address} ${formData.detailAddress}`.trim(),
        career: formData.experience,
        hiveCount: Number(formData.hiveCount),
        annualProduction: Number(formData.annualProduction),
        etc: formData.notes,
        documents: uploadedFile ? [{ name: uploadedFile.name, url: uploadedFile.url }] : [],
      }

      const response = await fetch(`${gatewayUrl}/memberRequestLists/upgradetomemberrequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(finalSubmission),
      })

      if (!response.ok) {
        const errorText = await response.text().catch(() => "")
        showAlert(errorText || "신청서 제출에 실패했습니다.")
        return
      }

      showAlert("신청이 완료되었습니다! 검토 후 3-5일 내에 연락드리겠습니다.", () => {
        window.location.href = "/mypage"
      })
    } catch (error: any) {
      console.error("신청서 제출 실패:", error)
      showAlert(error?.message || "신청서 제출 중 오류가 발생했습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" strategy="lazyOnload" />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">양봉농협 조합원 신청</h1>
            <p className="text-gray-600">양봉농협과 함께 더 나은 양봉 환경을 만들어가세요</p>
          </div>

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

          <Card>
            <CardHeader>
              <CardTitle>신청서 작성</CardTitle>
            </CardHeader>
            <CardContent>
              {/* HTML5 기본 검증 비활성화(noValidate) → 모든 알림은 커스텀 모달로 */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">개인정보</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} disabled className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} disabled className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">이메일 *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} disabled className="mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">양봉장 주소</h3>
                  <div className="flex items-end gap-2 mt-1">
                    <div className="w-1/3">
                      <Label htmlFor="zonecode">우편번호 *</Label>
                      <Input id="zonecode" name="zonecode" value={formData.zonecode} placeholder="우편번호" readOnly className="mt-1 bg-gray-100" />
                    </div>
                    <div className="w-2/3">
                      <Button type="button" onClick={handleAddressSearch} variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        주소 검색
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">주소 *</Label>
                    <Input id="address" name="address" value={formData.address} placeholder="주소 검색 결과" readOnly className="mt-1 bg-gray-100" />
                  </div>
                  <div>
                    <Label htmlFor="detailAddress">상세주소</Label>
                    <Input id="detailAddress" name="detailAddress" value={formData.detailAddress} onChange={handleInputChange} placeholder="상세주소를 입력해주세요" className="mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">양봉 정보</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="experience">양봉 경력 (년) *</Label>
                      <Input id="experience" name="experience" type="number" value={formData.experience} onChange={handleInputChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="hiveCount">보유 벌통 수 *</Label>
                      <Input id="hiveCount" name="hiveCount" type="number" value={formData.hiveCount} onChange={handleInputChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="annualProduction">연간 꿀 생산량 (kg) *</Label>
                      <Input id="annualProduction" name="annualProduction" type="number" value={formData.annualProduction} onChange={handleInputChange} className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">기타 사항</Label>
                    <Textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="추가로 전달하고 싶은 내용이 있으시면 작성해주세요" className="mt-1" rows={3} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">서류 첨부</h3>
                  <div>
                    <Label htmlFor="certificate">양봉농가등록증 *</Label>
                    <div className="mt-2">
                      <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                        {/* required 제거: 모든 알림은 모달로 처리 */}
                        <input id="certificate" type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileUpload} className="hidden" disabled={isUploading} />
                        <label htmlFor="certificate" className={`cursor-pointer ${isUploading ? "cursor-not-allowed" : ""}`}>
                          <Upload className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                          <p className="text-gray-600">{isUploading ? "업로드 중..." : uploadedFile ? uploadedFile.name : "파일을 선택하거나 드래그해주세요"}</p>
                          <p className="text-sm text-gray-500 mt-1">JPG, PNG, PDF (최대 10MB)</p>
                        </label>
                      </div>
                      {uploadedFile && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{uploadedFile.name}</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button type="submit" disabled={isSubmitting || isUploading} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3">
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

      {/* 커스텀 Alert 모달 */}
      <AlertModal message={alertMsg} onClose={closeAlert} />
    </>
  )
}
