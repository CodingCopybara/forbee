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

/** ===================== 워커 기반 미니게임 ===================== **/
function HoneyDropGameWorker({ imageSrc = "/honey-dnaji.png" }: { imageSrc?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const workerRef = useRef<Worker | null>(null)
  const [hud, setHud] = useState({ score: 0, miss: 0 })

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = wrap.getBoundingClientRect()

    // HTMLCanvasElement에는 width/height 속성 설정 ❌ (오프스크린으로 넘긴 뒤 재설정 불가)
    // CSS 크기만 지정 ✅
    canvas.style.width = rect.width + "px"
    canvas.style.height = rect.height + "px"

    // OffscreenCanvas로 넘기기
    const offscreen = (canvas as any).transferControlToOffscreen?.()
    if (!offscreen) return

    const worker = new Worker(new URL("./honeyGame.worker.ts", import.meta.url), { type: "module" })
    workerRef.current = worker

    worker.postMessage(
      { type: "init", canvas: offscreen, width: rect.width, height: rect.height, dpr, imageSrc },
      [offscreen as any]
    )

    // 이벤트들
    const onResize = () => {
      const r = wrap.getBoundingClientRect()
      canvas.style.width = r.width + "px"
      canvas.style.height = r.height + "px"
      worker.postMessage({ type: "resize", width: r.width, height: r.height, dpr: window.devicePixelRatio || 1 })
    }
    const onMove = (e: MouseEvent) => {
      const bb = canvas.getBoundingClientRect()
      worker.postMessage({ type: "move", x: e.clientX - bb.left })
    }
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      const bb = canvas.getBoundingClientRect()
      worker.postMessage({ type: "move", x: t.clientX - bb.left })
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") worker.postMessage({ type: "key", dir: -1 })
      if (e.key === "ArrowRight") worker.postMessage({ type: "key", dir: +1 })
    }
    worker.onmessage = (ev: MessageEvent) => {
      if (ev.data?.type === "hud") setHud({ score: ev.data.score, miss: ev.data.miss })
    }

    window.addEventListener("resize", onResize)
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("touchmove", onTouch, { passive: true })
    window.addEventListener("keydown", onKey)

    return () => {
      window.removeEventListener("resize", onResize)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("touchmove", onTouch)
      window.removeEventListener("keydown", onKey)
      try {
        worker.postMessage({ type: "dispose" })
        worker.terminate()
      } catch {}
    }
  }, [imageSrc])

  return (
    <div className="w-full max-w-[780px] mx-auto">
      <div className="mb-3 flex items-center justify-between text-sm text-gray-800">
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 rounded bg-gray-100 border border-gray-200">점수: <b>{hud.score}</b></span>
          <span className="px-2 py-1 rounded bg-gray-100 border border-gray-200">놓침: <b>{hud.miss}</b></span>
        </div>
        <div className="hidden md:block text-xs opacity-70">← → 키 / 마우스 / 터치</div>
      </div>
      <div
        ref={wrapRef}
        className="relative w-full aspect-[3/2] max-h-[60vh] rounded-2xl overflow-hidden border border-gray-200"
        style={{ background: "#ffffff" }}  // 흰색 배경
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
/** ============================================================ **/

const pause = (ms: number) => new Promise((r) => setTimeout(r, ms))
const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()))

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
        iconUrl: "/markers/honeycomb.png",
        iconSize: [64, 64],
        iconAnchor: [16, 32],
      })
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

    let grade
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
        high: "이 지역은 활엽수림이 풍부한 것으로 보입니다...",
        mid: "활엽수림이 적절히 분포하여 꿀벌의 채집 활동에 도움을 줍니다...",
        low: "활엽수림이 거의 없어 자연 밀원이 부족합니다...",
      },
      "침엽수림": {
        high: "침엽수림이 넓게 분포해 있지만 꿀 공급은 제한적입니다...",
        mid: "일정한 은신처 역할을 하지만 밀원은 제한적입니다...",
        low: "침엽수림이 거의 없지만 큰 영향은 없습니다...",
      },
      "논": {
        high: "농약 위험이 큽니다...",
        mid: "일부 분포로 피해 가능성 있습니다...",
        low: "피해 가능성 낮습니다...",
      },
      "밭": {
        high: "농약 위험이 큽니다...",
        mid: "피해 가능성 있어 관리 필요...",
        low: "위험 낮습니다...",
      },
      "비닐하우스": {
        high: "활동에 매우 불리할 수 있습니다...",
        mid: "일부 제약이 생길 수 있습니다...",
        low: "자유로운 비행이 가능합니다...",
      },
      "수역": {
        high: "활동 면적이 제한될 수 있습니다...",
        mid: "물 공급에 유리합니다...",
        low: "물 공급이 부족할 수 있습니다...",
      },
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
            <h2 style="font-weight:bold;">
              분석된 반경 중 ${label}이 
              <span style="color:#ff5722; font-weight:bold;">${percent}%</span> 차지합니다.
            </h2>
            <p style="margin: 4px 0; font-size:14px; color:#555555;">
              ${getLabelDescription(label, percent)}
            </p>
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
        proj4.defs(
          "EPSG:5179",
          "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs"
        )

        const satelliteCRS = (() => {
          const code = "EPSG:900913"
          const def =
            "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"
          const options = {
            resolutions: [
              156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875,
              4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875,
              305.7481130859375, 152.87405654296876, 76.43702827148438,
              38.21851413574219, 19.109257067871095, 9.554628533935547,
              4.777314266967774, 2.388657133483887, 1.1943285667419434,
              0.5971642833709717, 0.29858214168548586, 0.14929107084274293,
            ],
            origin: [-20037508.34, 20037508.34],
          }
          const crs = new window.sop.CRS.Proj(code, def, options)
          crs.projection.bounds = window.sop.bounds(
            [13232210.28055642, 3584827.864295762],
            [15238748.249933105, 5575460.5658249445]
          )
          return crs
        })()

        const map = new window.sop.map(mapRef.current, {
          scale: false,
          panControl: false,
          zoomSliderControl: true,
          minZoom: 10,
          maxZoom: 19,
          crs: satelliteCRS,
        })
        mapInstance.current = map

        const satelliteTileLayer = new window.sop.TileLayer(
          "https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg",
          { maxZoom: 19, minZoom: 10, crossOrigin: "anonymous" }
        )
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

  const captureAndPredict = async () => {
    if (!mapRef.current || !mapInstance.current) return
    setIsLoading(true)
    setTimeout(() => setShowGame(true), 300)

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
    await nextFrame()
    await pause(150)

    const mapElement = mapRef.current
    const tileWidth = mapElement.offsetWidth
    const tileHeight = mapElement.offsetHeight
    const minTargetSize = 1536 // 부하 완화

    const tilesPerSideX = Math.ceil(minTargetSize / tileWidth)
    const tilesPerSideY = Math.ceil(minTargetSize / tileHeight)
    const finalWidth = tileWidth * tilesPerSideX
    const finalHeight = tileHeight * tilesPerSideY

    const capturedImages: HTMLCanvasElement[] = []
    const startOffsetX = -Math.floor(tilesPerSideX / 2)
    const startOffsetY = -Math.floor(tilesPerSideY / 2)

    for (let y = 0; y < tilesPerSideY; y++) {
      for (let x = 0; x < tilesPerSideX; x++) {
        const dx = (startOffsetX + x) * tileWidth
        const dy = (startOffsetY + y) * tileHeight

        map.setView(originalCenter, captureZoom, { animate: false })
        map.panBy([dx, dy], { animate: false })
        await nextFrame()
        await pause(80)

        const canvas = await html2canvas(mapRef.current!, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: tileWidth,
          height: tileHeight,
        })

        capturedImages.push(canvas)
        await nextFrame()
      }
    }

    const finalCanvas = document.createElement("canvas")
    finalCanvas.width = finalWidth
    finalCanvas.height = finalHeight
    const ctx = finalCanvas.getContext("2d")!
    capturedImages.forEach((c, i) => {
      const x = (i % tilesPerSideX) * tileWidth
      const y = Math.floor(i / tilesPerSideX) * tileHeight
      ctx.drawImage(c, x, y, tileWidth, tileHeight)
    })

    const radius = Math.min(finalWidth, finalHeight) / 2
    const centerX = finalWidth / 2
    const centerY = finalHeight / 2

    const circularCanvas = document.createElement("canvas")
    circularCanvas.width = radius * 2
    circularCanvas.height = radius * 2
    const ctx2 = circularCanvas.getContext("2d")!

    ctx2.clearRect(0, 0, radius, radius)
    ctx2.beginPath()
    ctx2.arc(radius, radius, radius, 0, Math.PI * 2)
    ctx2.closePath()
    ctx2.clip()
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
    )

    const blob: Blob | null = await new Promise((resolve) => circularCanvas.toBlob(resolve as any, "image/png"))
    if (!blob) throw new Error("Blob 생성 실패")

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_GW_URL}/maps/predict-and-get-info`, blob, {
        headers: {
          "Content-Type": "image/png",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        responseType: "json",
      })

      setResultImageSrc(response.data.image_data || "")
      setPixelRatios(response.data.pixel_ratios || {})
      setRecommendationText(calculateRecommendation(response.data.pixel_ratios || {}))
      setShowResultPopup(true)
    } catch (error) {
      console.error("예측 실패:", error)
      setAlertMessage("분석에 실패했습니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      widgetElements.forEach((el) => {
        el.style.display = (el as any).dataset.prevDisplay || ""
        delete (el as any).dataset.prevDisplay
      })
      markerLayerRef.current?.addTo(mapInstance.current)
      map.setView(originalCenter, originalZoom)
      isCapturingRef.current = false
      setShowGame(false)
      setIsLoading(false)
    }
  }

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
              꿀벌이 활동하기 좋은 <span className="text-red-400 font-semibold">최적의 반경 600~800m</span>에 대해서
              선택하신 중심을 기준으로 분석합니다.
            </p>
            <p className="text-sm text-amber-800">선택한 지역에 대해, 부정적인 요소와 긍정적인 요소를 판단하고 등급을 산정합니다.</p>
            <p className="text-sm text-amber-800">각 요소에 대한 비율을 확인 할 수 있고, 그에 따른 안내도 드릴 수 있어요.</p>
          </div>

          {/* 분석 버튼 */}
          <div className="p-4">
            <Button
              onClick={captureAndPredict}
              disabled={isLoading || !isMapInitialized || showResultPopup}
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
              disabled={!resultImageSrc || showResultPopup}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              결과 보기
            </Button>
          </div>
        </div>

        {/* 메인 지도 영역 */}
        <div className="flex-1 relative grid place-items-center p-4">
          <div className="relative w-full h-full">
            {mapInitializationError ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px dashed gray",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p style={{ color: "#555" }}>{mapInitializationError}</p>
              </div>
            ) : (
              <div className="w-full h-full" ref={mapRef}></div>
            )}

            {/* 분석 오버레이 + 미니게임 */}
            {isLoading && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-gray-800 z-50"
                style={{ backgroundColor: "#ffffff" }} // 흰색 오버레이
              >
                <div className="flex items-center gap-3 mb-4">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <p className="text-lg">분석 중입니다. 게임을 하며 기다려보세요!</p>
                </div>
                <div className="w-full max-w-xl px-6 mb-6">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-amber-400 animate-pulse" style={{ width: "66%" }} />
                  </div>
                </div>
                {showGame && <HoneyDropGameWorker imageSrc="/honey-dnaji.png" />}
              </div>
            )}
          </div>

          {showResultPopup && resultImageSrc && (
            <div className="absolute inset-0 grid place-items-center z-[1000] bg-white rounded-lg shadow-lg p-4 h-full overflow-auto">
              {/* 닫기 버튼 */}
              <button className="absolute top-2 right-2 p-0 text-gray-500 bg-transparent" onClick={() => setShowResultPopup(false)}>
                <img src="/icons/x.png" alt="닫기" className="w-12 h-12 object-contain" />
              </button>

              <div className="flex flex-col md:flex-row gap-4 w-full items-stretch mt-10">
                <div className="md:w-6/10">
                  <Card className="w-full">
                    <CardHeader className="flex justify-between items-center">
                      <CardTitle className="text-lg pb-4">분석 보고서</CardTitle>
                      {analysisCoordinates && (
                        <div>
                          {analysisAddress &&
                            analysisAddress !== "주소를 찾을 수 없습니다." &&
                            analysisAddress !== "주소를 불러오지 못했습니다." && (
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
                              "무시": "bg-[#646464]",
                              "기타": "bg-[#A0A0A0]",
                              "건물": "bg-[#3C3C3C]",
                              "주차장": "bg-[#DCDCDC]",
                              "도로": "bg-[#808080]",
                              "가로수": "bg-[#ADFF2F]",
                              "논": "bg-[#8B4513]",
                              "비닐하우스": "bg-[#87CEEB]",
                              "밭": "bg-[#90EE90]",
                              "활엽수림": "bg-[#32CD32]",
                              "침엽수림": "bg-[#A54141]",
                              "나지": "bg-[#FF8C00]",
                              "수역": "bg-[#0000FF]",
                            }

                            const percent = Math.floor(value * 10000) / 100

                            return (
                              <div key={key} className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <div className={`w-4 h-4 rounded-full border border-gray-300 inline-block ${colors[key] || "bg-gray-300"}`} />
                                  <span className="text-gray-700">
                                    {key}: {percent}%
                                  </span>
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
