"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Search, Loader2, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface AnalysisResult {
  riskLevel: "A" | "B" | "C"
  landUse: {
    rice: number
    field: number
    building: number
    forest: number
    water: number
    other: number
  }
  report: string
}

export default function AreaAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [selectedLocation, setSelectedLocation] = useState("서울특별시 강남구 역삼동")

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    setAnalysisResult(null)

    // 실제 분석 API 호출 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // 샘플 분석 결과
    const mockResult: AnalysisResult = {
      riskLevel: "B",
      landUse: {
        rice: 25,
        field: 15,
        building: 35,
        forest: 20,
        water: 3,
        other: 2,
      },
      report: `선택하신 지역은 양봉에 적합한 B등급 지역입니다. 주변에 논과 밭이 40% 정도 분포하여 농약 사용에 주의가 필요하지만, 충분한 산림 지역(20%)이 있어 다양한 밀원을 확보할 수 있습니다. 건물 밀도가 높아 소음과 대기오염에 노출될 가능성이 있으나, 전반적으로 양봉 운영이 가능한 환경입니다. 농약 살포 시기를 미리 파악하고 벌통 관리에 특별한 주의를 기울이시기 바랍니다.`,
    }

    setAnalysisResult(mockResult)
    setIsAnalyzing(false)
  }

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "A":
        return "bg-green-500"
      case "B":
        return "bg-yellow-500"
      case "C":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRiskLevelIcon = (level: string) => {
    switch (level) {
      case "A":
        return <CheckCircle className="w-5 h-5" />
      case "B":
        return <AlertTriangle className="w-5 h-5" />
      case "C":
        return <XCircle className="w-5 h-5" />
      default:
        return null
    }
  }

  const getRiskLevelText = (level: string) => {
    switch (level) {
      case "A":
        return "우수 (양봉에 매우 적합)"
      case "B":
        return "보통 (양봉 가능, 주의 필요)"
      case "C":
        return "위험 (양봉에 부적합)"
      default:
        return "분석 필요"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">양봉 지역 분석</h1>

            {/* 위치 선택 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">분석할 지역</label>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{selectedLocation}</span>
              </div>
            </div>

            {/* 분석 버튼 */}
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white mb-6"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  분석 중...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  분석하기
                </>
              )}
            </Button>

            {/* 분석 결과 */}
            {analysisResult && (
              <div className="space-y-4">
                {/* 위험 등급 */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">위험 등급</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Badge
                        className={`${getRiskLevelColor(analysisResult.riskLevel)} text-white px-3 py-1 text-lg font-bold`}
                      >
                        {analysisResult.riskLevel}등급
                      </Badge>
                      <div className="flex items-center space-x-2 text-gray-600">
                        {getRiskLevelIcon(analysisResult.riskLevel)}
                        <span className="text-sm">{getRiskLevelText(analysisResult.riskLevel)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 토지 이용 현황 */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">토지 이용 현황</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(analysisResult.landUse).map(([key, value]) => {
                      const labels: Record<string, string> = {
                        rice: "논",
                        field: "밭",
                        building: "건물",
                        forest: "산림",
                        water: "수역",
                        other: "기타",
                      }

                      const colors: Record<string, string> = {
                        rice: "bg-blue-500",
                        field: "bg-green-500",
                        building: "bg-gray-500",
                        forest: "bg-emerald-600",
                        water: "bg-cyan-500",
                        other: "bg-purple-500",
                      }

                      return (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">{labels[key]}</span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <Progress
                            value={value}
                            className="h-2"
                            style={
                              {
                                "--progress-background": colors[key],
                              } as React.CSSProperties
                            }
                          />
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative">
          {/* 지도 플레이스홀더 */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">지도가 여기에 표시됩니다</p>
              <p className="text-gray-500 text-sm mt-2">실제 구현 시 Google Maps 또는 Naver Maps API 연동</p>
            </div>
          </div>

          {/* 로딩 오버레이 */}
          {isAnalyzing && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 text-center">
                <Loader2 className="w-12 h-12 text-amber-500 animate-spin mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900">지역 분석 중...</p>
                <p className="text-sm text-gray-600 mt-2">AI가 해당 지역의 양봉 적합성을 분석하고 있습니다</p>
              </div>
            </div>
          )}
        </div>

        {/* 하단 분석 리포트 */}
        {analysisResult && (
          <div className="absolute bottom-0 left-80 right-0 bg-white shadow-lg border-t">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">분석 리포트</h3>
              <p className="text-gray-700 leading-relaxed">{analysisResult.report}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
