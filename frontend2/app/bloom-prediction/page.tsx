"use client"

import { useState, useMemo } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Thermometer, Droplets, Wind, Loader2 } from "lucide-react"
import { BloomMap } from "@/components/ui/bloomMap"

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
  avgBloomDate: string
}

const flowerIcon = [
  { id: 1, name: "아카시아", image: "/icons/flower1.png" },
  { id: 2, name: "개나리", image: "/icons/flower2.png" },
  { id: 3, name: "매화", image: "/icons/flower3.png" },
  { id: 4, name: "벚꽃", image: "/icons/flower4.png" },
];

const locations: Location[] = [
  { id: "2", name: "강화", coordinates: [37.7074, 126.4463], station: "강화기상관측소, 인천광역시 강화군 불은면 중앙로 630" },
  { id: "5", name: "거창", coordinates: [35.6674, 127.9099], station: "거창기상대, 경상남도 거창군 거창읍 수남로 2117" },
  { id: "9", name: "고흥", coordinates: [34.6183, 127.2757], station: "고흥기상관측소, 전라남도 고흥군 고흥읍 두원로 130" },
  { id: "11", name: "광주", coordinates: [35.1729, 126.8916], station: "광주지방기상청, 광주광역시 북구 서암대로 71" },
  { id: "12", name: "구미", coordinates: [36.1306, 128.3206], station: "구미기상대, 경상북도 구미시 원남로2길 16" },
  { id: "13", name: "군산", coordinates: [36.0053, 126.7614], station: "군산기상대, 전북특별자치도 군산시 거척길 3-60" },
  { id: "14", name: "금산", coordinates: [36.1056, 127.4818], station: "금산기상관측소, 충청남도 금산군 금산읍 비단로 410-8" },
  { id: "16", name: "남원", coordinates: [35.4213, 127.3965], station: "남원기상레이더운영지원센, 전북특별자치도 남원시 춘향로 74-32" },
  { id: "19", name: "대구", coordinates: [35.878, 128.653], station: "대구지방기상청, 대구광역시 동구 효동로2길 10" },
  { id: "20", name: "대전", coordinates: [36.372, 127.3721], station: "대전지방기상청, 대전광역시 유성구 구성동 20-4" },
  { id: "21", name: "동두천", coordinates: [37.9019, 127.0607], station: "동두천기상대, 경기도 동두천시 방죽로 16-47" },
  { id: "22", name: "동해", coordinates: [37.5071, 129.1243], station: "동해기상대, 강원특별자치도 동해시 중앙로 31" },
  { id: "23", name: "목포", coordinates: [34.8173, 126.3815], station: "목포기상대, 전라남도 목포시 고하대로 815" },
  { id: "24", name: "문경", coordinates: [36.6273, 128.1488], station: "문경기상대, 경상북도 문경시 유곡불정로 223" },
  { id: "25", name: "밀양", coordinates: [35.4915, 128.7441], station: "밀양기상관측소, 경상남도 밀양시 점필재로 5" },
  { id: "26", name: "북강릉", coordinates: [37.8046, 128.8554], station: "강원지방기상청, 강원특별자치도 강릉시 사천면 과학단지로 130" },
  { id: "29", name: "북춘천", coordinates: [37.9474, 127.7544], station: "춘천기상대, 강원특별자치도 춘천시 신북읍 장본1길 12" },
  { id: "30", name: "부산", coordinates: [35.1047, 129.032], station: "부산기상관측소, 부산광역시 중구 복병산길32번길 5-11" },
  { id: "33", name: "봉화", coordinates: [36.9436, 128.9145], station: "봉화기상관측소, 경상북도 봉화군 춘양면 서동길 59" },
  { id: "34", name: "보령", coordinates: [36.3272, 126.5574], station: "보령, 충청남도 보령시 대해로 450" },
  { id: "37", name: "서귀포", coordinates: [33.2462, 126.5653], station: "서귀포기상관측소, 제주특별자치도 서귀포시 태평로439번길 17" },
  { id: "38", name: "서산", coordinates: [36.7766, 126.4939], station: "충청권대기환경연구소, 충청남도 서산시 수석동 188-1" },
  { id: "39", name: "서울", coordinates: [37.5714, 126.9658], station: "서울기상관측소, 서울특별시 종로구 송월길 52" },
  { id: "43", name: "속초", coordinates: [38.2509, 128.5647], station: "속초기상대, 강원특별자치도 고성군 토성면 봉포5길 9" },
  { id: "46", name: "수원", coordinates: [37.2575, 126.983], station: "수도권기상청, 경기도 수원시 권선구 권선로 276" },
  { id: "48", name: "영덕", coordinates: [36.5334, 129.4093], station: "영덕기상관측소, 경상북도 영덕군 영해면 성내리 233-4" },
  { id: "49", name: "영월", coordinates: [37.1813, 128.4574], station: "영월기상대, 강원특별자치도 영월군 영월읍 영월로 1894-25" },
  { id: "51", name: "영천", coordinates: [35.9774, 128.9514], station: "영천기상관측소, 경상북도 영천시 망정3길 35" },
  { id: "53", name: "울릉도", coordinates: [37.4813, 130.8986], station: "울릉도기상대, 경상북도 울릉군 울릉읍 사동리 66-1" },
  { id: "54", name: "울산", coordinates: [35.5824, 129.3347], station: "울산기상대, 울산광역시 중구 달빛로 65-26" },
  { id: "55", name: "울진", coordinates: [36.9918, 129.4128], station: "울진기상대, 경상북도 울진군 울진읍 현내항길 157" },
  { id: "56", name: "원주", coordinates: [37.3375, 127.9466], station: "원주기상대, 강원특별자치도 원주시 단구로 159" },
  { id: "58", name: "의성", coordinates: [36.3561, 128.6886], station: "의성기상관측소, 경상북도 의성군 의성읍 홍술로 89-14" },
  { id: "59", name: "이천", coordinates: [37.264, 127.4842], station: "이천기상관측소, 경기도 이천시 부발읍 대산로546번길 8" },
  { id: "61", name: "인천", coordinates: [37.4777, 126.6249], station: "인천기상대, 인천광역시 중구 자유공원서로 61" },
  { id: "62", name: "임실", coordinates: [35.612, 127.2856], station: "임실자동기상관측소, 전북특별자치도 임실군 임실읍 이도리 303-4" },
  { id: "63", name: "장수", coordinates: [35.657, 127.5203], station: "장수기상관측소, 전북특별자치도 장수군 장수읍 장천로 277" },
  { id: "65", name: "전주", coordinates: [35.8409, 127.1172], station: "전주기상지청, 전북특별자치도 전주시 덕진구 덕진동2가 370-10" },
  { id: "66", name: "제천", coordinates: [37.1593, 128.1943], station: "제천기상관측소, 충청북도 제천시 대학로 123" },
  { id: "67", name: "제주", coordinates: [33.5141, 126.5297], station: "제주지방기상청, 제주특별자치도 제주시 동문로9길 13-1" },
  { id: "69", name: "정읍", coordinates: [35.5634, 126.839], station: "국립전북기상과학관, 전북특별자치도 정읍시 서부산업도로 168-43" },
  { id: "71", name: "진주", coordinates: [35.1638, 128.04], station: "진주기상대, 경상남도 진주시 남강로 43" },
  { id: "75", name: "청주", coordinates: [36.6392, 127.4407], station: "청주기상대, 충청북도 청주시 흥덕구 공단로 76" },
  { id: "77", name: "추풍령", coordinates: [36.2203, 127.9946], station: "추풍령표준기상관측소, 충청북도 영동군 추풍령면 관리길 25-15" },
  { id: "78", name: "충주", coordinates: [36.9705, 127.9525], station: "충주기상대, 충청북도 충주시 안림동 526-1" },
  { id: "79", name: "통영", coordinates: [34.8454, 128.4356], station: "통영기상대, 경상남도 통영시 망일1길 67" },
  { id: "80", name: "파주", coordinates: [37.8859, 126.7665], station: "파주기상대, 경기도 파주시 문산읍 마정로 46-29" },
  { id: "81", name: "포항", coordinates: [36.032, 129.38], station: "포항기상대, 경상북도 포항시 남구 송도로 70" },
  { id: "83", name: "합천", coordinates: [35.5651, 128.1699], station: "합천기상관측소, 경상남도 합천군 합천읍 동서로 164" },
  { id: "84", name: "해남", coordinates: [34.5538, 126.5691], station: "해남자동기상관측, 전라남도 해남군 해남읍 남각길 337" },
];

const flowers = [
  { id: "acacia", name: "아카시아", color: "bg-white text-gray-800" },
  { id: "forsythia", name: "개나리", color: "bg-yellow-100 text-yellow-800" },
  { id: "plum", name: "매화", color: "bg-pink-100 text-pink-800" },
  { id: "cherry", name: "벚꽃", color: "bg-rose-100 text-rose-800" },
]

export default function BloomPredictionPage() {
  const [searchKeyword, setSearchKeyword] = useState("") 
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<BloomResult | null>(null)
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setShowLocationPopup(true)
    setResult(null)
  }

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) =>
      loc.name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  }, [searchKeyword])

  const handlePredict = async () => {
    if (!selectedLocation || !selectedFlower) return

    setIsLoading(true)
    setResult(null)

    const flowerInfo = flowerIcon.find(f => f.id === selectedFlower)

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
      const response = await axios.post(apiUrl, null, { params,   headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }, });
      const apiResponse = response.data; 
      console.log("받는 데이터:", apiResponse);

      // 결과 구성
      const newResult: BloomResult = {
        status: apiResponse.status, 
        location: selectedLocation.name,
        station: selectedLocation.station,
        flower: flowerInfo.name,
        predictedDate: apiResponse.predictedDate,
        confidence: apiResponse.confidence,
        temperature: apiResponse.temperature,
        humidity: apiResponse.humidity,
        windSpeed: apiResponse.windSpeed,
        previousYearBloomDate: apiResponse.previousYearBloomDate,
        avgBloomDate: apiResponse.avgBloomDate
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

          {/* 검색 입력창 */}
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="관측소 검색..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">관측 지역</h3>
            <div className="space-y-2">
              {locations
                .filter((loc) =>
                  loc.name.toLowerCase().includes(searchKeyword.toLowerCase())
                )
                .map((location) => (
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
        <div className="flex-1 relative grid place-items-center p-4">
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
                    {/* <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">개화 예측 결과</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        신뢰도 {result.confidence}%
                      </Badge>
                    </div> */}

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
                            <Calendar className="h-5 w-5 text-amber-600" />
                            <div>
                              <p className="text-sm text-gray-600">관측소 평균 개화일</p>
                              <p className="font-semibold">{result.avgBloomDate}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <Thermometer className="h-5 w-5 text-red-500" />
                            <div>
                              <p className="text-sm text-gray-600">기온</p>
                              <p className="font-semibold">{result.temperature}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card> */}

                      {/* <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <Droplets className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="text-sm text-gray-600">습도</p>
                              <p className="font-semibold">{result.humidity}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card> */}

                      {/* <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <Wind className="h-5 w-5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-600">풍속</p>
                              <p className="font-semibold">{result.windSpeed}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card> */}
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-medium text-amber-900 mb-2">
                        {result.station} - {result.flower} 개화 예측 정보
                      </h4>
                      <p className="text-sm text-amber-800">AI 예측에 성공했습니다.</p>
                      <p className="text-sm text-amber-800">해당 관측소에 전년도 개화일 데이터가 존재하지 않으면 표시되지 않을 수 있습니다.</p>
                      <p className="text-sm text-amber-800">관측소의 평균 개화일 데이터는 최근 10년간의 데이터를 기준으로 산정됩니다. 최근 관측 데이터가 없는 경우, 표시되지 않을 수 있습니다.</p>
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
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    예측할 밀원수를 선택하세요
                  </label>
                  <div className="flex flex-col gap-3">
                    {flowerIcon.map((flower) => (
                      <Card
                        key={flower.id}
                        className={`p-3 cursor-pointer border rounded-lg transition ${
                          selectedFlower === flower.id
                            ? "border-amber-500 bg-amber-50 shadow-md"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedFlower(flower.id)}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={flower.image}
                            alt={flower.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div>
                            <span className="text-gray-800 items-center self-center font-medium text-lg">{flower.name}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
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
