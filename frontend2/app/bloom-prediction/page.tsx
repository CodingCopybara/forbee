"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Thermometer, Droplets, Wind, Loader2 } from "lucide-react"
import { BloomMap } from "@/components/ui/BloomMap"

interface Location {
  id: string
  name: string
  coordinates: [number, number]
  station: string
}

interface BloomResult {
  status: string
  location: string
  station: string
  flower: string
  predictedDate: string
  confidence: number
  temperature: string
  humidity: string
  windSpeed: string
  previousYearBloomDate: string
}

const locations: Location[] = [
  { id: "1", name: "강릉", coordinates: [37.7515, 128.891], station: "강릉관측소" },
  { id: "2", name: "강화", coordinates: [37.7074, 126.4463], station: "강화관측소" },
  { id: "3", name: "강진군", coordinates: [34.6446, 126.7841], station: "강진군관측소" },
  { id: "4", name: "거제", coordinates: [34.8882, 128.6046], station: "거제관측소" },
  { id: "5", name: "거창", coordinates: [35.6674, 127.9099], station: "거창관측소" },
  { id: "6", name: "고산", coordinates: [33.2938, 126.1628], station: "고산관측소" },
  { id: "7", name: "고창", coordinates: [35.3482, 126.599], station: "고창관측소" },
  { id: "8", name: "고창군", coordinates: [35.4266, 126.697], station: "고창군관측소" },
  { id: "9", name: "고흥", coordinates: [34.6183, 127.2757], station: "고흥관측소" },
  { id: "10", name: "광양시", coordinates: [34.9434, 127.6914], station: "광양시관측소" },
  { id: "11", name: "광주", coordinates: [35.1729, 126.8916], station: "광주관측소" },
  { id: "12", name: "구미", coordinates: [36.1306, 128.3206], station: "구미관측소" },
  { id: "13", name: "군산", coordinates: [36.0053, 126.7614], station: "군산관측소" },
  { id: "14", name: "금산", coordinates: [36.1056, 127.4818], station: "금산관측소" },
  { id: "15", name: "김해시", coordinates: [35.2298, 128.8908], station: "김해시관측소" },
  { id: "16", name: "남원", coordinates: [35.4213, 127.3965], station: "남원관측소" },
  { id: "17", name: "남해", coordinates: [34.8166, 127.9264], station: "남해관측소" },
  { id: "18", name: "대관령", coordinates: [37.6771, 128.7183], station: "대관령관측소" },
  { id: "19", name: "대구", coordinates: [35.878, 128.653], station: "대구관측소" },
  { id: "20", name: "대전", coordinates: [36.372, 127.3721], station: "대전관측소" },
  { id: "21", name: "동두천", coordinates: [37.9019, 127.0607], station: "동두천관측소" },
  { id: "22", name: "동해", coordinates: [37.5071, 129.1243], station: "동해관측소" },
  { id: "23", name: "목포", coordinates: [34.8173, 126.3815], station: "목포관측소" },
  { id: "24", name: "문경", coordinates: [36.6273, 128.1488], station: "문경관측소" },
  { id: "25", name: "밀양", coordinates: [35.4915, 128.7441], station: "밀양관측소" },
  { id: "26", name: "북강릉", coordinates: [37.8046, 128.8554], station: "북강릉관측소" },
  { id: "27", name: "북부산", coordinates: [35.2178, 128.9602], station: "북부산관측소" },
  { id: "28", name: "북창원", coordinates: [35.2266, 128.6726], station: "북창원관측소" },
  { id: "29", name: "북춘천", coordinates: [37.9474, 127.7544], station: "북춘천관측소" },
  { id: "30", name: "부산", coordinates: [35.1047, 129.032], station: "부산관측소" },
  { id: "31", name: "부여", coordinates: [36.2724, 126.9208], station: "부여관측소" },
  { id: "32", name: "부안", coordinates: [35.7296, 126.7166], station: "부안관측소" },
  { id: "33", name: "봉화", coordinates: [36.9436, 128.9145], station: "봉화관측소" },
  { id: "34", name: "보령", coordinates: [36.3272, 126.5574], station: "보령관측소" },
  { id: "35", name: "보성군", coordinates: [34.7634, 127.2123], station: "보성군관측소" },
  { id: "36", name: "보은", coordinates: [36.4876, 127.7342], station: "보은관측소" },
  { id: "37", name: "서귀포", coordinates: [33.2462, 126.5653], station: "서귀포관측소" },
  { id: "38", name: "서산", coordinates: [36.7766, 126.4939], station: "서산관측소" },
  { id: "39", name: "서울", coordinates: [37.5714, 126.9658], station: "서울관측소" },
  { id: "40", name: "서청주", coordinates: [36.6399, 127.3846], station: "서청주관측소" },
  { id: "41", name: "성산", coordinates: [33.3868, 126.8802], station: "성산관측소" },
  { id: "42", name: "세종", coordinates: [36.4852, 127.2444], station: "세종관측소" },
  { id: "43", name: "속초", coordinates: [38.2509, 128.5647], station: "속초관측소" },
  { id: "44", name: "순창군", coordinates: [35.3713, 127.1286], station: "순창군관측소" },
  { id: "46", name: "수원", coordinates: [37.2575, 126.983], station: "수원관측소" },
  { id: "47", name: "영광군", coordinates: [35.2837, 126.4778], station: "영광군관측소" },
  { id: "48", name: "영덕", coordinates: [36.5334, 129.4093], station: "영덕관측소" },
  { id: "49", name: "영월", coordinates: [37.1813, 128.4574], station: "영월관측소" },
  { id: "50", name: "영주", coordinates: [36.8718, 128.5169], station: "영주관측소" },
  { id: "51", name: "영천", coordinates: [35.9774, 128.9514], station: "영천관측소" },
  { id: "52", name: "완도", coordinates: [34.3959, 126.7018], station: "완도관측소" },
  { id: "53", name: "울릉도", coordinates: [37.4813, 130.8986], station: "울릉도관측소" },
  { id: "54", name: "울산", coordinates: [35.5824, 129.3347], station: "울산관측소" },
  { id: "55", name: "울진", coordinates: [36.9918, 129.4128], station: "울진관측소" },
  { id: "56", name: "원주", coordinates: [37.3375, 127.9466], station: "원주관측소" },
  { id: "57", name: "의령군", coordinates: [35.3226, 128.2881], station: "의령군관측소" },
  { id: "58", name: "의성", coordinates: [36.3561, 128.6886], station: "의성관측소" },
  { id: "59", name: "이천", coordinates: [37.264, 127.4842], station: "이천관측소" },
  { id: "60", name: "인제", coordinates: [38.0599, 128.1681], station: "인제관측소" },
  { id: "61", name: "인천", coordinates: [37.4777, 126.6249], station: "인천관측소" },
  { id: "62", name: "임실", coordinates: [35.612, 127.2856], station: "임실관측소" },
  { id: "63", name: "장수", coordinates: [35.657, 127.5203], station: "장수관측소" },
  { id: "64", name: "장흥", coordinates: [34.6889, 126.9195], station: "장흥관측소" },
  { id: "65", name: "전주", coordinates: [35.8409, 127.1172], station: "전주관측소" },
  { id: "66", name: "제천", coordinates: [37.1593, 128.1943], station: "제천관측소" },
  { id: "67", name: "제주", coordinates: [33.5141, 126.5297], station: "제주관측소" },
  { id: "68", name: "정선군", coordinates: [37.3773, 128.6735], station: "정선군관측소" },
  { id: "69", name: "정읍", coordinates: [35.5634, 126.839], station: "정읍관측소" },
  { id: "70", name: "진도군", coordinates: [34.473, 126.2585], station: "진도군관측소" },
  { id: "71", name: "진주", coordinates: [35.1638, 128.04], station: "진주관측소" },
  { id: "72", name: "천안", coordinates: [36.7622, 127.2928], station: "천안관측소" },
  { id: "73", name: "청송군", coordinates: [36.4351, 129.0401], station: "청송군관측소" },
  { id: "74", name: "청주", coordinates: [36.6392, 127.4407], station: "청주관측소" },
  { id: "75", name: "춘천", coordinates: [37.9026, 127.7357], station: "춘천관측소" },
  { id: "76", name: "추풍령", coordinates: [36.2203, 127.9946], station: "추풍령관측소" },
  { id: "77", name: "충주", coordinates: [36.9705, 127.9525], station: "충주관측소" },
  { id: "78", name: "통영", coordinates: [34.8454, 128.4356], station: "통영관측소" },
  { id: "79", name: "파주", coordinates: [37.8859, 126.7665], station: "파주관측소" },
  { id: "80", name: "포항", coordinates: [36.032, 129.38], station: "포항관측소" },
  { id: "81", name: "함양군", coordinates: [35.5114, 127.7454], station: "함양군관측소" },
  { id: "82", name: "합천", coordinates: [35.5651, 128.1699], station: "합천관측소" },
  { id: "83", name: "해남", coordinates: [34.5538, 126.5691], station: "해남관측소" },
  { id: "84", name: "홍성", coordinates: [36.6576, 126.6877], station: "홍성관측소" },
  { id: "85", name: "홍천", coordinates: [37.6836, 127.8804], station: "홍천관측소" },
  { id: "86", name: "흑산도", coordinates: [34.6872, 125.4511], station: "흑산도관측소" },
];

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
    setResult(null)

    const flowerInfo = flowers.find((f) => f.id === selectedFlower)

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_GW_URL}/plants/predict-bloom`;
      console.log("Requesting API URL:", apiUrl);
      console.log("NEXT_PUBLIC_GW_URL:", process.env.NEXT_PUBLIC_GW_URL);

      if (!flowerInfo || !selectedLocation) {
        alert("꽃 또는 위치가 선택되지 않았습니다.");
        return;
      }

      const params = {
        year: new Date().getFullYear(),
        species: flowerInfo.name,
        location: selectedLocation.name,
      };
      console.log("주는 데이터:", params);

      // POST 요청
      const response = await axios.post(apiUrl, null, { params });
      const apiResponse = response.data; 
      console.log("받는 데이터:", apiResponse);

      // 결과 구성
      const newResult: BloomResult = {
        status: apiResponse.status, 
        location: selectedLocation.name,
        station: selectedLocation.station,
        flower: flowerInfo.name,
        predictedDate: apiResponse.predictedDate || "전년도 데이터 없음",
        confidence: apiResponse.confidence || 0,
        temperature: apiResponse.temperature || "N/A",
        humidity: apiResponse.humidity || "N/A",
        windSpeed: apiResponse.windSpeed || "N/A",
        previousYearBloomDate: apiResponse.previousYearBloomDate
      };

      setResult(newResult);

    } catch (error) {
      console.error("Failed to fetch prediction:", error);
      alert("개화 시기 예측에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
      setShowLocationPopup(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-900">개화 시기 예측</h1>
            <p className="text-sm text-gray-600 mt-2">AI를 이용해 가까운 관측소의 올해 개화시기를 예측하여 알려드려요.</p>
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
          <BloomMap
            locations={locations}
            onMarkerClick={handleLocationSelect}
            selectedLocation={selectedLocation}
          />

          {/* 하단 결과 표시 영역 */}
          {result && (
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t shadow-lg">
              <div className="p-6">
                {result.status === "fail" ? (
                  <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                    AI 예측에 실패했습니다.
                  </div>
                ) : (
                  <>
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
                            <Calendar className="h-5 w-5 text-amber-600" />
                            <div>
                              <p className="text-sm text-gray-600">전년도 개화일</p>
                              <p className="font-semibold">{result.previousYearBloomDate}</p>
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
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-medium text-amber-900 mb-2">
                        {result.station} - {result.flower} 개화 예측 정보
                      </h4>
                      <p className="text-sm text-amber-800">AI 예측 성공</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
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
    </div>
  )
  
}
