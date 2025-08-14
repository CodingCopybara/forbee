"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TreePine, Flower2, Cherry, Leaf, MapPin, Calendar, Info, CheckCircle, ArrowLeft } from "lucide-react"

const nectarSources = [
  {
    id: "acacia",
    name: "아카시아",
    icon: TreePine,
    season: "5월 중순 ~ 6월 초",
    honey: "아카시아꿀",
    characteristics: "맑고 투명한 색상, 결정화가 늦음",
    benefits: "높은 당도, 오랜 보관 가능",
    description: "한국의 대표적인 밀원수로 품질 좋은 꿀을 생산합니다.",
    image: "/placeholder-ps4k8.png",
  },
  {
    id: "forsythia",
    name: "개나리",
    icon: Flower2,
    season: "3월 하순 ~ 4월 중순",
    honey: "개나리꿀",
    characteristics: "연한 황색, 부드러운 향",
    benefits: "이른 봄 꿀 생산, 꿀벌 활력 증진",
    description: "이른 봄 꿀벌들의 첫 번째 중요한 꿀 공급원입니다.",
    image: "/forsythia-yellow-flowers.png",
  },
  {
    id: "plum",
    name: "매화",
    icon: Cherry,
    season: "2월 하순 ~ 3월 중순",
    honey: "매화꿀",
    characteristics: "진한 향과 독특한 맛",
    benefits: "이른 개화로 봄철 꿀 생산 시작",
    description: "가장 이른 시기에 개화하여 꿀벌들의 활동을 시작하게 합니다.",
    image: "/white-plum-blossoms.png",
  },
  {
    id: "cherry",
    name: "벚꽃",
    icon: Leaf,
    season: "4월 초 ~ 4월 말",
    honey: "벚꽃꿀",
    characteristics: "연분홍빛 색상, 화사한 향",
    benefits: "봄철 주요 밀원, 관상가치 겸비",
    description: "아름다운 꽃과 함께 양질의 꿀을 제공하는 밀원수입니다.",
    image: "/cherry-blossom-pink-flowers.png",
  },
]

const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL;
async function getAccessToken(): Promise<string | null> {
  return localStorage.getItem("accessToken");
}

async function uploadOne(file: File): Promise<string> {
  const token = await getAccessToken();
  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch(`${gatewayUrl}/files/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: fd,
  });
  if (!res.ok) {
    let m = "";
    try { m = await res.text(); } catch {}
    throw new Error(`파일 업로드 실패: ${res.status} ${m}`);
  }
  const data = (await res.json()) as { url: string };
  return data.url;
}

type CreateTreePayload = {
  username: string;
  applicantName: string;
  phone: string;
  apiaryAddress: string;
  apiarySize?: "small" | "medium" | "large";
  desiredFlora: string;  // "아카시아" | "개나리" | "매화" | "벚꽃"
  desiredQty: number;
  photoUrl?: string;     // 대표 1장
  reason?: string;
};

async function createTreeApplication(payload: CreateTreePayload) {
  const token = localStorage.getItem("accessToken"); // optional
  const res = await fetch(`${gatewayUrl}/trees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const msg = await res.text();
    console.error("신청 생성 실패:", res.status, msg); // 콘솔에도 남김
    throw new Error(`신청 생성 실패: ${res.status} ${msg}`);
  }
  return res.json() as Promise<{ id: string; status: string }>;
}

export default function NectarSupportPage() {
  const [selectedSource, setSelectedSource] = useState<string>("")
  const [applicationStep, setApplicationStep] = useState<"info" | "form" | "success">("info")
  const [sitePhotos, setSitePhotos] = useState<File[]>([])
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    farmSize: "",
    nectarType: "",
    quantity: "",
    reason: "",
  })
  const [loading, setLoading] = useState(false)
  
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      const isValidType = ["image/png","image/jpeg","image/jpg"].includes(file.type)
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
      return isValidType && isValidSize
    })
    if (validFiles.length !== files.length) {
      alert("PNG, JPG 파일만 업로드 가능하며, 각 10MB 이하여야 합니다.")
    }
    // 미리보기 위해 파일은 유지
    setSitePhotos((prev) => [...prev, ...validFiles].slice(0, 5))
  }

  const removePhoto = (index: number) => {
    setSitePhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    try {
      setLoading(true)

      // 1) 선택된 사진 업로드 (병렬)
      const uploadedUrls = await Promise.all(sitePhotos.map(uploadOne))
      const primaryPhoto = uploadedUrls[0] // 대표 1장만 저장 (여러 장은 추후 확장)
      const username = localStorage.getItem("username") || "";

      // 2) 프론트 값 → 백엔드 DTO 매핑
      const payload = {
        username,
        applicantName: formData.name.trim(),
        phone: formData.phone.trim(),
        apiaryAddress: formData.address.trim(),
        apiarySize: (formData.farmSize || undefined) as "small" | "medium" | "large" | undefined,
        desiredFlora: formData.nectarType,              // "아카시아" 등
        desiredQty: Number(formData.quantity || 0),
        photoUrl: primaryPhoto,
        reason: formData.reason?.trim() || "",
      }

      if (!payload.applicantName || !payload.phone || !payload.apiaryAddress || !payload.desiredFlora || !payload.desiredQty) {
        alert("필수 입력을 확인해주세요.")
        setLoading(false)
        return
      }

      // 3) 신청 생성
      await createTreeApplication(payload)

      // 4) 완료 화면
      setApplicationStep("success")
    } catch (err: any) {
      console.error(err)
      alert(err?.message ?? "신청 중 오류가 발생했습니다.")
    } finally {
      setLoading(false)
    }
  }

  if (applicationStep === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">신청이 완료되었습니다!</h1>
            <p className="text-gray-600 mb-6">
              밀원수 지원 신청이 성공적으로 접수되었습니다.
              <br />
              양봉농협에서 검토 후 3-5일 내에 연락드리겠습니다.
            </p>
            <div className="space-y-2 text-sm text-gray-500 mb-8">
              <p>
                • 신청 내용: {formData.nectarType} {formData.quantity}그루
              </p>
              <p>• 연락처: {formData.phone}</p>
              <p>• 예상 처리 기간: 3-5일</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setApplicationStep("info")} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                돌아가기
              </Button>
              <Link href="/mypage">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">마이페이지에서 확인</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (applicationStep === "form") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" onClick={() => setApplicationStep("info")} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">밀원수 지원 신청</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">신청자명 *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">연락처 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">양봉장 주소 *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="양봉장이 위치한 주소를 입력해주세요"
                  required
                />
              </div>

              <div>
                <Label htmlFor="farmSize">양봉장 규모</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, farmSize: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="양봉장 규모를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">소규모 (1-10통)</SelectItem>
                    <SelectItem value="medium">중규모 (11-50통)</SelectItem>
                    <SelectItem value="large">대규모 (51통 이상)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nectarType">희망 밀원수 *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, nectarType: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="밀원수 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="아카시아">아카시아</SelectItem>
                      <SelectItem value="개나리">개나리</SelectItem>
                      <SelectItem value="매화">매화</SelectItem>
                      <SelectItem value="벚꽃">벚꽃</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="quantity">희망 수량 *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, quantity: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="수량 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10그루</SelectItem>
                      <SelectItem value="20">20그루</SelectItem>
                      <SelectItem value="50">50그루</SelectItem>
                      <SelectItem value="100">100그루</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="sitePhotos">부지 사진 업로드</Label>
                <div className="mt-2">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                    <input
                      type="file"
                      id="sitePhotos"
                      multiple
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <label htmlFor="sitePhotos" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <MapPin className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-1">부지 사진을 업로드해주세요</p>
                        <p className="text-xs text-gray-400">PNG, JPG 파일만 가능 (최대 5개, 각 10MB 이하)</p>
                      </div>
                    </label>
                  </div>

                  {sitePhotos.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-gray-700">업로드된 사진 ({sitePhotos.length}/5)</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {sitePhotos.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={URL.createObjectURL(file) || "/placeholder.svg"}
                                alt={`부지 사진 ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
                            >
                              ×
                            </button>
                            <p className="text-xs text-gray-500 mt-1 truncate">{file.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="reason">신청 사유</Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="밀원수 지원이 필요한 사유를 간단히 작성해주세요"
                  rows={4}
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">지원 안내</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• 양봉농협 조합원에게 우선 지원됩니다</li>
                  <li>• 지원 수량은 양봉장 규모에 따라 조정될 수 있습니다</li>
                  <li>• 부지 사진을 통해 최적의 식재 위치를 안내해드립니다</li>
                  <li>• 식재 후 관리 방법에 대한 가이드를 제공합니다</li>
                  <li>• 지원 승인 후 배송까지 1-2주 소요됩니다</li>
                </ul>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                {loading ? "처리 중..." : "지원 신청하기"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">양봉농협 지원 프로그램</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-amber-500">밀원수 지원</span>
            <br />
            서비스
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            양봉농협과 함께하는 밀원수 무료 지원 프로그램으로 더 풍성한 꿀 생산을 시작하세요
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3"
            onClick={() => setApplicationStep("form")}
          >
            지원 신청하기
          </Button>
        </div>
      </section>

      {/* Nectar Sources Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">지원 가능한 밀원수</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              계절별 개화시기와 특성을 고려한 4가지 주요 밀원수를 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nectarSources.map((source) => {
              const IconComponent = source.icon
              return (
                <Card key={source.id} className="border-2 hover:border-amber-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{source.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          {source.season}
                        </div>
                        <CardDescription>{source.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-1">생산 꿀</h4>
                        <p className="text-sm text-gray-600">{source.honey}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-1">특징</h4>
                        <p className="text-sm text-gray-600">{source.characteristics}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-1">장점</h4>
                        <p className="text-sm text-gray-600">{source.benefits}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">지원 프로그램 혜택</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">양봉농협 조합원을 위한 특별한 혜택을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <CardTitle>무료 묘목 지원</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  양봉장 규모에 맞는 밀원수 묘목을 무료로 지원하여 초기 투자 부담을 덜어드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <CardTitle>전문가 컨설팅</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">밀원수 식재부터 관리까지 전문가의 1:1 맞춤 컨설팅을 제공합니다.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle>현장 방문 서비스</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">전문가가 직접 현장을 방문하여 최적의 식재 위치와 방법을 안내해드립니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">지금 신청하세요</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            양봉농협의 밀원수 지원 프로그램으로 더 풍성한 꿀 생산을 시작해보세요
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-semibold"
            onClick={() => setApplicationStep("form")}
          >
            무료 지원 신청하기
          </Button>
        </div>
      </section>
    </div>
  )
}
