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
  const [isMapInitialized, setIsMapInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [coordinates, setCoordinates] = useState("위치 정보를 로드 중...")
  const [resultImageSrc, setResultImageSrc] = useState("")
  const [pixelRatios, setPixelRatios] = useState<PixelRatios>({})
  const [recommendationText, setRecommendationText] = useState("")

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

  const waitForTilesLoaded = async (map: any) => {
    console.log("타일 로딩 대기 시작 (임시 delay)")
    await new Promise(r => setTimeout(r, 500))
    console.log("타일 로딩 대기 완료")
  }

  const calculateOffsetCenter = (originalCenter: any, dx: number, dy: number) => {
    const utmkX = originalCenter.x + dx;
    const utmkY = originalCenter.y + dy;
    return window.sop.utmk(utmkX, utmkY);
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
    await new Promise(r => setTimeout(r, 500));

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
    console.log("각 타일 캡처 해상도:", tileWidth*2, "x", tileHeight*2);

    for (let y = 0; y < tilesPerSideY; y++) {
      for (let x = 0; x < tilesPerSideX; x++) {
        const dx = (startOffsetX + x) * tileWidth;
        const dy = (startOffsetY + y) * tileHeight;

        const newCenter = calculateOffsetCenter(originalCenter, dx, dy);
        map.setView(newCenter, captureZoom, { animate: false });
        await waitForTilesLoaded(map);

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

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = finalWidth;
    finalCanvas.height = finalHeight;
    const ctx = finalCanvas.getContext("2d")!;
    capturedImages.forEach((c, i) => {
      const x = (i % tilesPerSideX) * tileWidth;
      const y = Math.floor(i / tilesPerSideX) * tileHeight;
      ctx.drawImage(c, x, y, tileWidth, tileHeight);
    });

    const blob: Blob | null = await new Promise(resolve =>
      finalCanvas.toBlob(resolve as any, "image/png")
    )
    if (!blob) throw new Error("Blob 생성 실패");

    try {
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

      setResultImageSrc(response.data.imageUrl || "")
      setPixelRatios(response.data.pixelRatios || {})
      setRecommendationText(calculateRecommendation(response.data.pixelRatios || {}))
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
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{coordinates}</span>
              </div>
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

            {/* 분석 결과 */}
            {resultImageSrc && (
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">분석 이미지</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={resultImageSrc} alt="예측 결과" className="w-full rounded-md shadow-sm" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">추천 점수</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: recommendationText }}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">토지 이용 현황</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(pixelRatios).map(([key, value]) => {
                      const labels: Record<string, string> = {
                        "논": "논", "밭": "밭", "건물": "건물",
                        "산림": "산림", "수역": "수역", "비닐하우스": "비닐하우스"
                      };
                      const colors: Record<string, string> = {
                        "논": "bg-blue-500", "밭": "bg-green-500",
                        "건물": "bg-gray-500", "산림": "bg-emerald-600",
                        "수역": "bg-cyan-500", "비닐하우스": "bg-purple-500"
                      };
                      return (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">{labels[key] || key}</span>
                            <span className="font-medium">{value.toFixed(2)}%</span>
                          </div>
                          <Progress
                            value={value}
                            className="h-2"
                            style={{ "--progress-background": colors[key] } as React.CSSProperties}
                          />
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative">
          <div className="w-full h-full" ref={mapRef}></div>
        </div>
      </div>
    </div>
  )
}
