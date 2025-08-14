"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin, Search, Loader2 } from "lucide-react"

import proj4 from "proj4"
import html2canvas from 'html2canvas-pro'
import axios from "axios"

declare global {
  interface Window {
    sop: any
  }
}

interface PixelRatios {
  [key: string]: number
}

export default function MapPredict() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const [isMapInitialized, setIsMapInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [coordinates, setCoordinates] = useState("위치 정보를 로드 중...")
  const [resultImageSrc, setResultImageSrc] = useState("")
  const [pixelRatios, setPixelRatios] = useState<PixelRatios>({})
  const [recommendationText, setRecommendationText] = useState("")
  const [showResultPopup, setShowResultPopup] = useState(false);

  // SOP 지도 중심 좌표 갱신
  const updateCoordinates = () => {
    if (!mapInstance.current) return
    const center = mapInstance.current.getCenter()
    let lat: number, lng: number
    if (typeof center.getLat === "function") {
      lat = center.getLat()
      lng = center.getLng()
    } else {
      const utmkX = center.x
      const utmkY = center.y
      const latlng = proj4("EPSG:5179", "EPSG:4326", [utmkX, utmkY])
      lat = latlng[1]
      lng = latlng[0]
    }
    setCoordinates(`${lat.toFixed(6)}, ${lng.toFixed(6)}`)
  }

  // 추천 점수 계산
  const calculateRecommendation = (ratios: PixelRatios) => {
    const weights: { [key: string]: number } = {
      "활엽수림": 2,
      "침엽수림": 0.5,
      "논": -3,
      "밭": -3,
      "비닐하우스": -1,
      "수역": 0.5,
    }
    let score = 0
    for (const [label, ratio] of Object.entries(ratios)) {
      if (weights[label] !== undefined) score += ratio * weights[label]
    }

    let grade
    if (score >= 0.5) grade = "A"
    else if (score >= 0.25) grade = "B"
    else grade = "C"

    const lines = [
      "예측 결과는 참고용입니다. 실제와 다를 수 있습니다.",
      "- A/B/C 3등급으로 분류되어 있으며, 알파벳 순서대로 등급입니다.",
      "- C 등급은 꿀벌에게 부정적인 환경으로 양봉지로 적합하지 않습니다.",
    ]
    const gradeBadgeColor =
      grade === "A" ? "#28a745" : grade === "B" ? "#ffc107" : "#dc3545"
    const badgeHtml = `<div style="background-color: ${gradeBadgeColor}; font-weight:bold;font-size:18px;color:white;padding:6px 12px;border-radius:8px;display:inline-block;margin-bottom:10px;">예측 등급: ${grade}</div>`
    const lineHtml = lines.map((line) => `<p>${line}</p>`).join("")
    return badgeHtml + lineHtml
  }

  // 지도 초기화
  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || typeof window.sop === "undefined") return;

      proj4.defs("EPSG:5179", "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs")

      const satelliteCRS = (() => {
        const code = "EPSG:900913";
        const def = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
        const options = {
          resolutions: [
            156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875,
            4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875,
            305.7481130859375, 152.87405654296876, 76.43702827148438,
            38.21851413574219, 19.109257067871095, 9.554628533935547,
            4.777314266967774, 2.388657133483887, 1.1943285667419434,
            0.5971642833709717, 0.29858214168548586, 0.14929107084274293
          ],
          origin: [-20037508.34, 20037508.34]
        };
        const crs = new window.sop.CRS.Proj(code, def, options);
        crs.projection.bounds = window.sop.bounds(
          [13232210.28055642, 3584827.864295762],
          [15238748.249933105, 5575460.5658249445]
        );
        return crs;
      })()

      const map = new window.sop.map(mapRef.current, {
        scale: false,
        panControl: false,
        zoomSliderControl: true,
        minZoom: 10,
        maxZoom: 19,
        crs: satelliteCRS,
      });
      mapInstance.current = map;

      const satelliteTileLayer = new window.sop.TileLayer(
        "https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg",
        { maxZoom: 19, minZoom: 10, crossOrigin: 'anonymous' }
      );
      map.addLayer(satelliteTileLayer);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const utmk = proj4("EPSG:4326", "EPSG:5179", [pos.coords.longitude, pos.coords.latitude])
            map.setView(window.sop.utmk(utmk[0], utmk[1]), 16)
          },
          () => {
            const defaultPoint = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5])
            map.setView(window.sop.utmk(defaultPoint[0], defaultPoint[1]), 16)
          }
        )
      } else {
        const defaultPoint = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5])
        map.setView(window.sop.utmk(defaultPoint[0], defaultPoint[1]), 16)
      }

      map.on("moveend", updateCoordinates)
      map.on("zoomend", updateCoordinates)
      map.invalidateSize()
      setIsMapInitialized(true)
    }

    const interval = setInterval(() => {
      if (typeof window.sop !== "undefined") {
        clearInterval(interval)
        initializeMap()
      }
    }, 100)

    return () => {
      clearInterval(interval)
      if (mapInstance.current) mapInstance.current.remove()
    }
  }, [])

  useEffect(() => {
    if (resultImageSrc && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [resultImageSrc]);

  const captureAndPredict = async () => {
    if (!mapRef.current || !mapInstance.current) return;
    setIsLoading(true);

    const widgetElements = mapRef.current.querySelectorAll<HTMLElement>('.sop-control');
    widgetElements.forEach(el => {
      el.dataset.prevDisplay = el.style.display;
      el.style.display = 'none';
    });


    const map = mapInstance.current;
    const originalCenter = map.getCenter();
    const originalZoom = map.getZoom();

    const captureZoom = 18;
    map.setZoom(captureZoom);
    await new Promise(r => setTimeout(r, 700));

    const mapElement = mapRef.current;
    const tileWidth = mapElement.offsetWidth;
    const tileHeight = mapElement.offsetHeight;
    const minTargetSize = 3000;

    const tilesPerSideX = Math.ceil(minTargetSize / tileWidth);
    const tilesPerSideY = Math.ceil(minTargetSize / tileHeight);
    const finalWidth = tileWidth * tilesPerSideX;
    const finalHeight = tileHeight * tilesPerSideY;

    const capturedImages: HTMLCanvasElement[] = [];
    const startOffsetX = -Math.floor(tilesPerSideX / 2);
    const startOffsetY = -Math.floor(tilesPerSideY / 2);
    
    console.log("지도 div 크기:", tileWidth, "x", tileHeight);
    console.log("캡처 최소 목표 크기:", minTargetSize);
    console.log("가로/세로 타일 수:", tilesPerSideX, tilesPerSideY);
    console.log("최종 캡처 이미지 크기 (px):", finalWidth, "x", finalHeight);
    
    // 타일 스티
    for (let y = 0; y < tilesPerSideY; y++) {
      for (let x = 0; x < tilesPerSideX; x++) {
        const dx = (startOffsetX + x) * tileWidth;
        const dy = (startOffsetY + y) * tileHeight;

        map.setView(originalCenter, captureZoom, { animate: false });
        map.panBy([dx, dy], { animate: false });
        await new Promise(r => setTimeout(r, 700));

        const canvas = await html2canvas(mapRef.current!, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: tileWidth,
          height: tileHeight
        });

        capturedImages.push(canvas);
      }
    }

    // 타일 합치기
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = finalWidth;
    finalCanvas.height = finalHeight;
    const ctx = finalCanvas.getContext("2d")!;
    capturedImages.forEach((c, i) => {
      const x = (i % tilesPerSideX) * tileWidth;
      const y = Math.floor(i / tilesPerSideX) * tileHeight;
      ctx.drawImage(c, x, y, tileWidth, tileHeight);
    });
    
    // 꿀벌 행동 반경을 위한 원형 마스킹
    const radius = Math.min(finalWidth, finalHeight) / 2;
    const centerX = finalWidth / 2;
    const centerY = finalHeight / 2;

    const circularCanvas = document.createElement("canvas");
    circularCanvas.width = radius * 2;
    circularCanvas.height = radius * 2;
    const ctx2 = circularCanvas.getContext("2d")!;

    ctx2.beginPath();
    ctx2.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.clip();

    ctx2.drawImage(
      finalCanvas,
      centerX - radius,
      centerY - radius,
      radius * 2,
      radius * 2,
      0,
      0,
      radius * 2,
      radius * 2
    );

    const blob: Blob | null = await new Promise(resolve =>
      circularCanvas.toBlob(resolve as any, "image/png")
    )
    if (!blob) throw new Error("Blob 생성 실패");

    try {
      console.log("분석을 위해 이미지를 서버로 전송합니다.", { size: blob.size, type: blob.type });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_GW_URL}/predict-and-get-info`,
        blob,
        {
          headers: {
            "Content-Type": "image/png",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          responseType: "json",
        }
      );
      console.log("서버로부터 분석 결과를 받았습니다:", response.data);

      setResultImageSrc(response.data.image_data || "")
      setPixelRatios(response.data.pixel_ratios || {})
      setRecommendationText(calculateRecommendation(response.data.pixel_ratios || {}))
    } catch (error) {
      console.error('예측 실패:', error)
    } finally {
      widgetElements.forEach(el => {
        el.style.display = el.dataset.prevDisplay || '';
        delete el.dataset.prevDisplay;
      });
      map.setView(originalCenter, originalZoom)
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">양봉 지역 분석</h1>

            {/* 분석할 지역 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">분석할 지역</label>
              <div className="pb-6 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{coordinates}</span>
              </div>
              
              
              <label className="block text-sm font-medium text-gray-700 mb-2">이용 안내</label>
              <p className="text-sm text-amber-800">AI 양봉 입지 분석 서비스입니다.</p>
              <p className="text-sm text-amber-800">지도의 중앙에 분석을 원하는 장소를 두세요.</p>
              <p className="text-sm text-amber-800">꿀벌이 활동하기 좋은 <span className="text-red-400 font-semibold">최적의 반경 600~800m</span>에 대해서 선택하신 중심을 기준으로 분석합니다.</p>
              <p className="text-sm text-amber-800">선택한 지역에 대해, 부정적인 요소와 긍정적인 요소를 판단하고 등급을 산정합니다.</p>
              <p className="text-sm text-amber-800">각 요소에 대한 비율을 확인 할 수 있고, 그에 따른 안내도 드릴 수 있어요.</p>
            </div>

            {/* 분석 버튼 */}
            <Button
              onClick={captureAndPredict}
              disabled={isLoading || !isMapInitialized}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white mb-6"
            >
              {isLoading ? (
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

            <Button
              onClick={() => setShowResultPopup(true)}
              disabled={!resultImageSrc} // 결과가 없으면 비활성화
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
              결과 보기
            </Button>
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative grid place-items-center p-4">
          <div className="relative w-full h-full">
            <div className="w-full h-full" ref={mapRef}></div>
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ zIndex: 10 , backgroundColor: "rgba(0,0,0,0.8)",}}>
                <Loader2 className="w-16 h-16 animate-spin mb-4" />
                <p className="text-xl">분석 중입니다. 잠시만 기다려주세요...</p>
              </div>
            )}
          </div>

          {showResultPopup && resultImageSrc && (
            <div className="absolute top-12 left-0 right-0 mx-auto z-30 bg-white rounded-lg shadow-lg p-4" style={{ width: '100%' }}>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowResultPopup(false)}
                >
                  ✕
                </button>
                {/* 추천 점수 */}
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg">추천 점수</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div dangerouslySetInnerHTML={{ __html: recommendationText }} />
                  </CardContent>
                </Card>

                {/* 분석 이미지 */}
                <div className="md:w-7/10">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">분석 이미지</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={resultImageSrc} alt="예측 결과" className="w-full h-full rounded-full object-cover shadow-sm" />
                    </CardContent>
                  </Card>
                </div>

                
                {/* 토지 이용 비율 */}
                <div className="md:w-3/19">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">토지 이용 비율</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {Object.entries(pixelRatios)
                        .sort((a, b) => b[1] - a[1]) 
                        .map(([key, value]) => {
                          const labels: Record<string, string> = {
                            // "-1": "무시",
                            // "0": "기타",
                            "1": "건물",
                            // "2": "주차장",
                            // "3": "도로",
                            // "4": "가로수",
                            "5": "논",
                            "6": "비닐하우스",
                            "7": "밭",
                            "8": "활엽수림",
                            "9": "침엽수림",
                            "10": "나지",
                            "11": "수역"
                          };

                          const colors: Record<string, string> = {
                            "-1": "rgb(100,100,100)",
                            "0": "rgb(160,160,160)",
                            "1": "rgb(60,60,60)",
                            "2": "rgb(220,220,220)",
                            "3": "rgb(128,128,128)",
                            "4": "rgb(173,255,47)",
                            "5": "rgb(139,69,19)",
                            "6": "rgb(135,206,235)",
                            "7": "rgb(144,238,144)",
                            "8": "rgb(50,205,50)",
                            "9": "rgb(165,65,65)",
                            "10": "rgb(255,140,0)",
                            "11": "rgb(0,0,255)"
                          };

                          const percent = Math.floor(value * 10000) / 100; 
                          return (
                            <div key={key} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-700">{labels[key] || key}</span>
                                <span className="font-medium">{percent}%</span>
                              </div>
                                <Progress
                                  value={percent}
                                  className={`h-2 ${colors[key]}`}
                                />
                            </div>
                          );
                        })}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
