"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Search, Loader2 } from "lucide-react"

import proj4 from "proj4"
import html2canvas from "html2canvas-pro"
import axios from "axios"

declare global {
  interface Window {
    sop: any
  }
}

interface PixelRatios {
  [key: string]: number
}

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

/**
 * 🍯 간단 미니게임 (워커 없이)
 */
function HoneyDropGame({ imageSrc = "https://forbee.blob.core.windows.net/blob/public/honey-dnaji.png" }: { imageSrc?: string }) {
  const areaRef = useRef<HTMLDivElement>(null)
  const [score, setScore] = useState(0)
  const [miss, setMiss] = useState(0)
  const [basketX, setBasketX] = useState(150)
  const [areaW, setAreaW] = useState(360)
  const itemsRef = useRef<{ id: number; x: number; y: number; speed: number }[]>([])
  const idRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const spawnTimer = useRef<any>(null)

  useEffect(() => {
    const updateSize = () => {
      const el = areaRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setAreaW(rect.width)
      setBasketX(rect.width / 2)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = areaRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setBasketX(Math.max(0, Math.min(rect.width, e.clientX - rect.left)))
    }
    const onTouch = (e: TouchEvent) => {
      const el = areaRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const t = e.touches[0]
      setBasketX(Math.max(0, Math.min(rect.width, t.clientX - rect.left)))
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setBasketX((x) => Math.max(0, x - 24))
      if (e.key === "ArrowRight") setBasketX((x) => Math.min(areaW, x + 24))
    }
    const el = areaRef.current
    el?.addEventListener("mousemove", onMove)
    el?.addEventListener("touchmove", onTouch)
    window.addEventListener("keydown", onKey)
    return () => {
      el?.removeEventListener("mousemove", onMove)
      el?.removeEventListener("touchmove", onTouch)
      window.removeEventListener("keydown", onKey)
    }
  }, [areaW])

  useEffect(() => {
    spawnTimer.current = setInterval(() => {
      const w = areaRef.current?.clientWidth || 360
      itemsRef.current.push({ id: idRef.current++, x: Math.random() * (w - 40) + 20, y: -40, speed: 2.6 + Math.random() * 1.8 })
    }, 650)

    const loop = () => {
      const h = areaRef.current?.clientHeight || 520
      const basketWidth = 96
      const basketHeight = 18
      const basketY = h - 36

      itemsRef.current.forEach((it) => (it.y += it.speed))

      const remain: typeof itemsRef.current = []
      itemsRef.current.forEach((it) => {
        const caught = Math.abs(it.x - basketX) < basketWidth / 2 && it.y + 20 >= basketY - basketHeight && it.y <= basketY + 10
        if (caught) return void setScore((s) => s + 1)
        if (it.y > h + 40) return void setMiss((m) => m + 1)
        remain.push(it)
      })
      itemsRef.current = remain
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearInterval(spawnTimer.current)
    }
  }, [basketX])

  return (
    <div className="w-full max-w-[780px] mx-auto">
      <div className="mb-3 flex items-center justify-between text-sm text-gray-200">
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 rounded bg-white/10">점수: <b className="text-white">{score}</b></span>
          <span className="px-2 py-1 rounded bg-white/10">놓침: <b className="text-white">{miss}</b></span>
        </div>
        <div className="hidden md:block text-xs opacity-90">← → 키 / 마우스 / 터치</div>
      </div>
      <div ref={areaRef} className="relative w-full aspect-[3/2] max-h-[60vh] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
        {itemsRef.current.map((it) => (
          <img key={it.id} src={imageSrc} alt="honey" className="pointer-events-none select-none absolute w-10 h-10" style={{ transform: `translate(${it.x - 20}px, ${it.y - 20}px)` }} />
        ))}
        <div
          className="absolute bottom-4 left-0 h-[18px] w-[96px] rounded-full"
          style={{
            transform: `translateX(${Math.max(0, Math.min(areaW - 96, basketX - 48))}px)`,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            background: "linear-gradient(180deg, #f59e0b, #b45309)",
          }}
        />
      </div>
    </div>
  )
}

export default function MapPredict() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const [isMapInitialized, setIsMapInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [coordinates, setCoordinates] = useState("위치 정보를 로드 중...")
  const [resultImageSrc, setResultImageSrc] = useState("")
  const [pixelRatios, setPixelRatios] = useState<PixelRatios>({})
  const [recommendationText, setRecommendationText] = useState("")
  const [showResultPopup, setShowResultPopup] = useState(false)
  const markerLayerRef = useRef<any>(null)
  const markerRef = useRef<any>(null)
  const honeycombIconRef = useRef<any>(null)
  const [analysisCoordinates, setAnalysisCoordinates] = useState<string>("")
  const [address, setAddress] = useState<string>("주소를 로드 중...")
  const [analysisAddress, setAnalysisAddress] = useState<string>("")
  const isCapturingRef = useRef(false)
  const [mapInitializationError, setMapInitializationError] = useState<string | null>(null)
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => {
    if (mapInstance.current && !markerLayerRef.current) {
      const layer = new window.sop.LayerGroup()
      layer.addTo(mapInstance.current)
      markerLayerRef.current = layer
    }
  }, [mapInstance.current])

  useEffect(() => {
    if (typeof window.sop !== "undefined") {
      honeycombIconRef.current = new window.sop.icon({
        iconUrl: 'https://forbee.blob.core.windows.net/blob/public/honey-dnaji.png',
        iconSize: [48, 48],
        iconAnchor: [16, 32],
      });
    }
  }, [])

  const updateCoordinates = async () => {
    if (!mapInstance.current || !markerLayerRef.current) return
    if (isCapturingRef.current) return

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
    setCoordinates(`${lat.toFixed(4)}, ${lng.toFixed(4)}`)
    setAnalysisCoordinates(`${lat.toFixed(4)}, ${lng.toFixed(4)}`)

    const utmkPos = window.sop.utmk(center.x, center.y)

    markerLayerRef.current.clearLayers()
    const newMarker = new window.sop.Marker(utmkPos, { icon: honeycombIconRef.current })
    newMarker.addTo(markerLayerRef.current)
    markerRef.current = newMarker

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_GW_URL}/maps/reverse-geocode`, {
        params: { x_coor: center.x, y_coor: center.y },
        headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") },
      })
      const addr = res.data.full_addr || "주소를 불러오지 못했습니다."
      setAddress(addr)
      setAnalysisAddress(addr)
    } catch (err) {
      console.error("주소 조회 실패", err)
      setAddress("주소를 불러오지 못했습니다.")
      setAnalysisAddress("주소를 불러오지 못했습니다.")
    }
  }

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

    let grade: "A" | "B" | "C"
    if (score >= 0.5) grade = "A"
    else if (score >= 0.25) grade = "B"
    else grade = "C"

    const gradeBadgeColor = grade === "A" ? "#28a745" : grade === "B" ? "#ffc107" : "#dc3545"
    const badgeHtml = `<div style="background-color: ${gradeBadgeColor}; font-weight:bold;font-size:18px;color:white;padding:6px 12px;border-radius:8px;display:inline-block;margin-bottom:20px;">예측 등급: ${grade}</div>`

    const labelThresholds: Record<string, { high: number; mid: number }> = {
      "활엽수림": { high: 20, mid: 10 },
      "침엽수림": { high: 20, mid: 10 },
      "논": { high: 10, mid: 3 },
      "밭": { high: 10, mid: 3 },
      "비닐하우스": { high: 8, mid: 3 },
      "수역": { high: 30, mid: 10 },
    }

    const labelDescriptions: Record<string, { high: string; mid: string; low: string }> = {
      "활엽수림": {
        high: "이 지역은 활엽수림이 풍부한 것으로 보입니다. 꿀벌에게 매우 유리합니다.",
        mid: "활엽수림이 적절히 분포합니다.",
        low: "활엽수림이 거의 없습니다.",
      },
      "침엽수림": {
        high: "침엽수림이 넓지만 꿀 공급은 제한적입니다.",
        mid: "은신처 역할은 하지만 밀원은 제한적입니다.",
        low: "침엽수림이 거의 없습니다.",
      },
      "논": { high: "농약 위험이 큽니다.", mid: "일부 피해 가능성.", low: "위험 낮음." },
      "밭": { high: "농약 위험이 큽니다.", mid: "관리 필요.", low: "위험 낮음." },
      "비닐하우스": { high: "활동에 불리.", mid: "부분 제약.", low: "자유로운 비행." },
      "수역": { high: "활동 면적 제한.", mid: "물 공급 유리.", low: "물 공급 부족." },
    }

    const getLabelDescription = (label: string, percent: number) => {
      const thresholds = labelThresholds[label]
      if (!thresholds) return ""
      if (percent >= thresholds.high) return labelDescriptions[label].high
      if (percent >= thresholds.mid) return labelDescriptions[label].mid
      return labelDescriptions[label].low
    }

    const labelHtml = Object.entries(ratios)
      .filter(([label]) => (labelDescriptions as any)[label])
      .sort((a, b) => b[1] - a[1])
      .map(([label, ratio]) => {
        const percent = Math.floor(ratio * 10000) / 100
        return `
          <div style="padding:6px 0;">
            <h2 style=\"font-weight:bold;\">분석된 반경 중 ${label}이 <span style=\"color:#ff5722; font-weight:bold;\">${percent}%</span> 차지합니다.</h2>
            <p style=\"margin: 4px 0; font-size:14px; color:#555555;\">${getLabelDescription(label, percent)}</p>
          </div>
        `
      })
      .join("")

    return badgeHtml + labelHtml
  }

  // 지도 초기화
  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || typeof window.sop === "undefined") {
        setMapInitializationError("지도 객체를 찾을 수 없습니다.")
        return
      }
      try {
        proj4.defs("EPSG:5179", "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs")

        const satelliteCRS = (() => {
          const code = "EPSG:900913"
          const def = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"
          const options = {
            resolutions: [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875, 305.7481130859375, 152.87405654296876, 76.43702827148438, 38.21851413574219, 19.109257067871095, 9.554628533935547, 4.777314266967774, 2.388657133483887, 1.1943285667419434, 0.5971642833709717, 0.29858214168548586, 0.14929107084274293],
            origin: [-20037508.34, 20037508.34],
          }
          const crs = new window.sop.CRS.Proj(code, def, options)
          crs.projection.bounds = window.sop.bounds([13232210.28055642, 3584827.864295762], [15238748.249933105, 5575460.5658249445])
          return crs
        })()

        const map = new window.sop.map(mapRef.current, { scale: false, panControl: false, zoomSliderControl: true, minZoom: 10, maxZoom: 19, crs: satelliteCRS })
        mapInstance.current = map

        const satelliteTileLayer = new window.sop.TileLayer("https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg", { maxZoom: 19, minZoom: 10, crossOrigin: "anonymous" })
        map.addLayer(satelliteTileLayer)

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const utmk = proj4("EPSG:4326", "EPSG:5179", [pos.coords.longitude, pos.coords.latitude])
              map.setView(window.sop.utmk(utmk[0], utmk[1]), 16)
            },
            () => {
              const dp = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5])
              map.setView(window.sop.utmk(dp[0], dp[1]), 16)
            }
          )
        } else {
          const dp = proj4("EPSG:4326", "EPSG:5179", [127.5, 36.5])
          map.setView(window.sop.utmk(dp[0], dp[1]), 16)
        }

        map.on("moveend", updateCoordinates)
        map.on("zoomend", updateCoordinates)
        map.invalidateSize()
        setIsMapInitialized(true)
      } catch (error) {
        console.error("Error initializing map:", error)
        setMapInitializationError("지도를 불러오는 중 오류가 발생했습니다.")
      }
    }

    let attemptCount = 0
    const maxAttempts = 50

    const interval = setInterval(() => {
      attemptCount++
      if (typeof window.sop !== "undefined") {
        clearInterval(interval)
        initializeMap()
      } else if (attemptCount > maxAttempts) {
        clearInterval(interval)
        console.error("SGIS map script failed to load.")
        setMapInitializationError("지도를 불러오지 못했습니다. 네트워크 연결을 확인해주세요.")
      }
    }, 200)

    return () => {
      clearInterval(interval)
      if (mapInstance.current) mapInstance.current.remove()
    }
  }, [])

  // ⛏️ 전체 분석 → 응답 받는 즉시 로딩 종료 & 팝업 표시
  const captureAndPredict = async () => {
    if (!mapRef.current || !mapInstance.current) return
    setIsLoading(true)
    const gameTimer = setTimeout(() => setShowGame(true), 700)

    const widgetElements = mapRef.current.querySelectorAll<HTMLElement>(".sop-control")
    widgetElements.forEach((el) => {
      ;(el as any).dataset.prevDisplay = el.style.display
      el.style.display = "none"
    })
    markerLayerRef.current?.remove()
    isCapturingRef.current = true

    const map = mapInstance.current
    const originalCenter = map.getCenter()
    const originalZoom = map.getZoom()

    const captureZoom = 18
    map.setZoom(captureZoom)
    await new Promise((r) => setTimeout(r, 800))

    const mapElement = mapRef.current;
    const tileWidth = mapElement.offsetWidth;
    const tileHeight = mapElement.offsetHeight;
    const minTargetSize = 1500;

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

    // 타일 스티칭
    for (let y = 0; y < tilesPerSideY; y++) {
      for (let x = 0; x < tilesPerSideX; x++) {
        const dx = (startOffsetX + x) * tileWidth;
        const dy = (startOffsetY + y) * tileHeight;

        map.setView(originalCenter, captureZoom, { animate: false });
        map.panBy([dx, dy], { animate: false });
        await new Promise(r => setTimeout(r, 999));

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

      // 2) 스티칭
      const finalCanvas = document.createElement("canvas")
      finalCanvas.width = finalWidth
      finalCanvas.height = finalHeight
      const ctx = finalCanvas.getContext("2d")!
      capturedImages.forEach((c, i) => {
        const x = (i % tilesPerSideX) * tileWidth
        const y = Math.floor(i / tilesPerSideX) * tileHeight
        ctx.drawImage(c, x, y, tileWidth, tileHeight)
      })

      // 3) 원형 마스킹
      const radius = Math.min(finalWidth, finalHeight) / 2
      const centerX = finalWidth / 2
      const centerY = finalHeight / 2

      const circularCanvas = document.createElement("canvas")
      circularCanvas.width = radius * 2
      circularCanvas.height = radius * 2
      const ctx2 = circularCanvas.getContext("2d")!

      ctx2.beginPath()
      ctx2.arc(radius, radius, radius, 0, Math.PI * 2)
      ctx2.closePath()
      ctx2.clip()
      ctx2.drawImage(finalCanvas, centerX - radius, centerY - radius, radius * 2, radius * 2, 0, 0, radius * 2, radius * 2)

      const blob: Blob | null = await new Promise((resolve) => circularCanvas.toBlob(resolve as any, "image/png"))
      if (!blob) throw new Error("Blob 생성 실패")

      // 4) 예측 요청 → 응답 받는 즉시 팝업 ON, 로딩 OFF (바로 결과 사진 보이도록)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_GW_URL}/maps/predict-and-get-info`, blob, {
        headers: { "Content-Type": "image/png", Authorization: "Bearer " + localStorage.getItem("accessToken") },
        responseType: "json",
      })

      setResultImageSrc(response.data.image_data || "")
      setPixelRatios(response.data.pixel_ratios || {})
      setRecommendationText(calculateRecommendation(response.data.pixel_ratios || {}))

      // 👉 오버레이를 먼저 내리고 팝업을 바로 띄움
      clearTimeout(gameTimer)
      setShowGame(false)
      setIsLoading(false) // 로딩 오버레이 즉시 종료
      setShowResultPopup(true) // 결과 팝업 즉시 표시
    } catch (error) {
      console.error("예측 실패:", error)
      clearTimeout(gameTimer)
      setShowGame(false)
      setIsLoading(false)
      setAlertMessage("분석에 실패했습니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      // 5) UI 원상 복구 (팝업 표시와 병렬로 진행)
      const widgetElements = mapRef.current?.querySelectorAll<HTMLElement>(".sop-control") || []
      widgetElements.forEach((el) => {
        el.style.display = (el as any).dataset.prevDisplay || ""
        delete (el as any).dataset.prevDisplay
      })
      markerLayerRef.current?.addTo(mapInstance.current)
      map.setView(originalCenter, originalZoom)
      isCapturingRef.current = false
    }
  }

  // 결과 보고서 UI 테스트 진입로
  const dummyRatios: PixelRatios = {
    "활엽수림": 0.35,
    "침엽수림": 0.15,
    "논": 0.10,
    "밭": 0.10,
    "비닐하우스": 0.10,
    "수역": 0.10,
    "나지": 0.05,
  };

  const dummyImage = "https://forbee.blob.core.windows.net/blob/public/images/dummy_result.png";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 좌측 사이드바 */}
        <div className="w-80 bg-white shadow-lg overflow-y-auto">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-900">양봉 입지 분석</h1>
            <p className="text-sm text-gray-600 mt-2">AI를 이용해 원하는 위치가 양봉하기 적합한지 분석해드려요.</p>
          </div>

          {/* 분석할 지역 */}
          <div className="border-b pt-4 pr-4 pl-4">
            <h3 className="font-semibold text-gray-900 mb-3">분석할 지역</h3>
            <div className="pb-4 flex flex-col">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-m text-gray-600">{address}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">({coordinates})</div>
            </div>
          </div>

          {/* 이용 안내 */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">이용 안내</h3>
            <p className="text-sm text-amber-800">AI 양봉 입지 분석 서비스입니다.</p>
            <p className="text-sm text-amber-800">지도의 중앙에 분석을 원하는 장소를 두세요.</p>
            <p className="text-sm text-amber-800">
              꿀벌이 활동하기 좋은 <span className="text-red-400 font-semibold">최적의 반경 600~800m</span>에 대해서 선택하신 중심을 기준으로 분석합니다.
            </p>
            <p className="text-sm text-amber-800">선택한 지역에 대해, 부정적인 요소와 긍정적인 요소를 판단하고 등급을 산정합니다.</p>
            <p className="text-sm text-amber-800">각 요소에 대한 비율을 확인 할 수 있고, 그에 따른 안내도 드릴 수 있어요.</p>
          </div>

          {/* 분석 버튼 */}
          <div className="p-4">
            <Button onClick={captureAndPredict} disabled={isLoading || !isMapInitialized || showResultPopup} className="w-full bg-amber-500 hover:bg-amber-600 text-white mb-6">
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

            <Button onClick={() => setShowResultPopup(true)} disabled={!resultImageSrc || showResultPopup} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
              결과 보기
            </Button>
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative grid place-items-center p-4">
          <div className="relative w-full h-full">
            {mapInitializationError ? (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed gray", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
                <p style={{ color: "#555" }}>{mapInitializationError}</p>
              </div>
            ) : (
              <div className="w-full h-full" ref={mapRef}></div>
            )}

            {/* 분석 오버레이 + 미니게임 */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50" style={{ backgroundColor: "rgba(0,0,0,0.85)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <p className="text-lg">분석 중입니다. 게임을 하며 기다려보세요!</p>
                </div>
                <div className="w-full max-w-xl px-6 mb-6">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-2 bg-amber-400 animate-pulse" style={{ width: "66%" }} />
                  </div>
                </div>
                {showGame && <HoneyDropGame imageSrc="https://forbee.blob.core.windows.net/blob/public/honey-dnaji.png" />}
              </div>
            )}
          </div>

          {showResultPopup && resultImageSrc && (
            <div className="absolute inset-0 grid place-items-center z-[1000] bg-white rounded-lg shadow-lg p-4 h-full overflow-auto">
              {/* 닫기 버튼*/}
              <button
                className="absolute top-2 right-2 p-0 text-gray-500 bg-transparent"
                onClick={() => setShowResultPopup(false)}
              >
                <img src="https://forbee.blob.core.windows.net/blob/public/icons/x.png" alt="닫기" className="w-12 h-12 object-contain" />
              </button>

              <div className="flex flex-col md:flex-row gap-4 w-full items-stretch mt-10">
                <div className="md:w-6/10">
                  <Card className="w-full">
                    <CardHeader className="flex justify-between items-center">
                      <CardTitle className="text-lg pb-4">분석 보고서</CardTitle>
                      {analysisCoordinates && (
                        <div>
                          {analysisAddress && analysisAddress !== "주소를 찾을 수 없습니다." && analysisAddress !== "주소를 불러오지 못했습니다." && (
                            <span className="text-m text-gray-500">{analysisAddress}</span>
                          )}
                          <span className="text-s text-gray-500">({analysisCoordinates})</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div dangerouslySetInnerHTML={{ __html: recommendationText }} />
                    </CardContent>
                  </Card>
                </div>

                <div className="md:w-4/10 h-full">
                  <div className="flex flex-col gap-4 w-full items-stretch md:flex-col">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg">토지 비율 분석</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 overflow-auto flex-grow">
                        {Object.entries(pixelRatios)
                          .sort((a, b) => b[1] - a[1])
                          .map(([key, value]) => {
                            const colors: Record<string, string> = {
                              무시: "bg-[#646464]",
                              기타: "bg-[#A0A0A0]",
                              건물: "bg-[#3C3C3C]",
                              주차장: "bg-[#DCDCDC]",
                              도로: "bg-[#808080]",
                              가로수: "bg-[#ADFF2F]",
                              논: "bg-[#8B4513]",
                              비닐하우스: "bg-[#87CEEB]",
                              밭: "bg-[#90EE90]",
                              활엽수림: "bg-[#32CD32]",
                              침엽수림: "bg-[#A54141]",
                              나지: "bg-[#FF8C00]",
                              수역: "bg-[#0000FF]",
                            }

                            const percent = Math.floor(value * 10000) / 100

                            return (
                              <div key={key} className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <div className={`w-4 h-4 rounded-full border border-gray-300 inline-block ${colors[key] || "bg-gray-300"}`} />
                                  <span className="text-gray-700">{key}: {percent}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                                  <div className={`h-full ${colors[key] || "bg-gray-300"}`} style={{ width: `${percent}%` }} />
                                </div>
                              </div>
                            )
                          })}
                      </CardContent>
                    </Card>

                    <Card className="mb-6 mt-6 w-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg">분석 이미지</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <img src={resultImageSrc} alt="예측 결과" className="w-full h-full rounded-full object-cover shadow-sm" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AlertModal message={alertMessage} onClose={() => setAlertMessage("")} />
    </div>
  )
}
