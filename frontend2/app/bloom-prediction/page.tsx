"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Thermometer, Droplets, Wind, Loader2 } from "lucide-react"

interface Location {
  id: string
  name: string
  coordinates: [number, number]
  station: string
}

interface BloomResult {
  location: string
  station: string
  flower: string
  predictedDate: string
  confidence: number
  temperature: string
  humidity: string
  windSpeed: string
  additionalInfo: string
}

const locations: Location[] = [
  { id: "1", name: "서울 강남구", coordinates: [37.5173, 127.0473], station: "강남관측소" },
  { id: "2", name: "경기 수원시", coordinates: [37.2636, 127.0286], station: "수원관측소" },
  { id: "3", name: "충북 청주시", coordinates: [36.6424, 127.489], station: "청주관측소" },
  { id: "4", name: "전남 순천시", coordinates: [34.9506, 127.4872], station: "순천관측소" },
  { id: "5", name: "경남 진주시", coordinates: [35.18, 128.1076], station: "진주관측소" },
  { id: "6", name: "강원 춘천시", coordinates: [37.8813, 127.7298], station: "춘천관측소" },
]

const flowers = [
  { id: "acacia", name: "아카시아", color: "bg-white text-gray-800" },
  { id: "forsythia", name: "개나리", color: "bg-yellow-100 text-yellow-800" },
  { id: "plum", name: "매화", color: "bg-pink-100 text-pink-800" },
  { id: "cherry", name: "벚꽃", color: "bg-rose-100 text-rose-800" },
]

export default function BloomPredictionPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedFlower, setSelectedFlower] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<BloomResult | null>(null)
  const [showLocationPopup, setShowLocationPopup] = useState(false)

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setShowLocationPopup(true)
    setResult(null)
  }

  const handlePredict = async () => {
    if (!selectedLocation || !selectedFlower) return

    setIsLoading(true)

    // 시뮬레이션된 예측 결과
    setTimeout(() => {
      const flower = flowers.find((f) => f.id === selectedFlower)
      const mockResult: BloomResult = {
        location: selectedLocation.name,
        station: selectedLocation.station,
        flower: flower?.name || "",
        predictedDate: "2024년 4월 15일 (±3일)",
        confidence: Math.floor(Math.random() * 20) + 80,
        temperature: "평균 15.2°C",
        humidity: "상대습도 65%",
        windSpeed: "평균 2.1m/s",
        additionalInfo: `${selectedLocation.station}의 과거 10년간 데이터를 기반으로 분석한 결과입니다. 기상 조건에 따라 ±3일 정도의 오차가 있을 수 있습니다.`,
      }
      setResult(mockResult)
      setIsLoading(false)
      setShowLocationPopup(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-900">밀원수 개화 예측</h1>
            <p className="text-sm text-gray-600 mt-2">AI를 활용한 실시간 개화시기 예측 서비스</p>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">관측 지역</h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <Card
                  key={location.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedLocation?.id === location.id ? "ring-2 ring-amber-500" : ""
                  }`}
                  onClick={() => handleLocationSelect(location)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <div>
                        <p className="font-medium text-sm">{location.name}</p>
                        <p className="text-xs text-gray-500">{location.station}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative">
          <div className="h-full bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
            {/* 지도 시뮬레이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/30"></div>

            {/* 지도 핀들 */}
            {locations.map((location, index) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: `${20 + (index % 3) * 25}%`,
                  top: `${20 + Math.floor(index / 3) * 30}%`,
                }}
                onClick={() => handleLocationSelect(location)}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-amber-500 rounded-full shadow-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                    {location.name}
                  </div>
                </div>
              </div>
            ))}

            {/* 지도 컨트롤 */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="sm">
                  +
                </Button>
                <Button variant="outline" size="sm">
                  -
                </Button>
              </div>
            </div>
          </div>

          {/* 하단 결과 표시 영역 */}
          {result && (
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">개화 예측 결과</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    신뢰도 {result.confidence}%
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
                        <div>
                          <p className="text-sm text-gray-600">예상 개화일</p>
                          <p className="font-semibold">{result.predictedDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="text-sm text-gray-600">기온</p>
                          <p className="font-semibold">{result.temperature}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-600">습도</p>
                          <p className="font-semibold">{result.humidity}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Wind className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">풍속</p>
                          <p className="font-semibold">{result.windSpeed}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-medium text-amber-900 mb-2">
                    {result.station} - {result.flower} 개화 예측 정보
                  </h4>
                  <p className="text-sm text-amber-800">{result.additionalInfo}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 지역 선택 팝업 */}
      {showLocationPopup && selectedLocation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span>{selectedLocation.name}</span>
              </CardTitle>
              <p className="text-sm text-gray-600">{selectedLocation.station}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">예측할 밀원수를 선택하세요</label>
                <div className="grid grid-cols-2 gap-2">
                  {flowers.map((flower) => (
                    <Button
                      key={flower.id}
                      variant={selectedFlower === flower.id ? "default" : "outline"}
                      className={`${selectedFlower === flower.id ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                      onClick={() => setSelectedFlower(flower.id)}
                    >
                      {flower.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowLocationPopup(false)}>
                  취소
                </Button>
                <Button
                  className="flex-1 bg-amber-500 hover:bg-amber-600"
                  onClick={handlePredict}
                  disabled={!selectedFlower || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      예측 중...
                    </>
                  ) : (
                    "개화일 예측"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
