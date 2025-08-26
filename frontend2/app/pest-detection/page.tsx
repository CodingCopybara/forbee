"use client"

import type React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
// @ts-ignore
import { useRouter } from "next/navigation"
import { RequireMemberWithAlert } from "@/components/requirewithalert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Camera, Upload, MessageSquare, Send, ArrowLeft, AlertTriangle, CheckCircle, Bot, User, HelpCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Sender = "user" | "bot"
type Kind = "text" | "image" | "loading"
type Detection = { name: string; risk?: string | number } | null

interface Message {
  id: string
  sender: Sender
  kind: Kind
  content?: string
  imageUrl?: string
  timestamp: number
}

const ALLOWED_TYPES = ["image/jpeg", "image/png"]
const MAX_SIZE = 10 * 1024 * 1024 // 10MB
const GW_URL = process.env.NEXT_PUBLIC_GW_URL || ""

// ---- fetch 유틸 ----
async function getJSON<T>(url: string, headers: Record<string, string> = {}) {
  const res = await fetch(url, { headers, credentials: "include" })
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`)
  return (await res.json()) as T
}

async function postJSON<T = unknown>(url: string, body: any, headers: Record<string, string> = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
    credentials: "include",
  })
  if (!res.ok) throw new Error(`POST ${url} -> ${res.status}`)
  try {
    return (await res.json()) as T
  } catch {
    return undefined as unknown as T
  }
}

export default function PestDetectionPage() {
  return (
    <RequireMemberWithAlert>
      <PestDetectionScreen /> {/* <- 권한 확인 후에만 마운트됨 */}
    </RequireMemberWithAlert>
  )
}

function PestDetectionScreen() {
    const router = useRouter()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: String(Date.now()),
      sender: "bot",
      kind: "text",
      content: "꿀벌 질병/해충 탐지 서비스에 오신걸 환영합니다~! 분석을 원하는 사진을 올려주세요 🤓✨",
      timestamp: Date.now(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isBotLoading, setIsBotLoading] = useState(false)
  const [showQnaBtn, setShowQnaBtn] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const esRef = useRef<EventSource | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const userId = useMemo(() => {
    if (typeof window === "undefined") return ""
    const email = localStorage.getItem("username") || ""
    return email.includes("@") ? email.split("@")[0] : email
  }, [])
  const [detection, setDetection] = useState<Detection>(null)
  // SSE 구독
  useEffect(() => {
    if (!userId) return
    const streamUrl = `${GW_URL}/ai/stream?userId=${encodeURIComponent(userId)}`
    const es = new EventSource(streamUrl)
    esRef.current = es

    const onAgent = (evt: MessageEvent) => {
      setIsBotLoading(false)
      removeBotLoadingMessage()

      try {
        const payload = JSON.parse(evt.data)
        const mainText: string | undefined = payload.prescription || payload.response

        const diseaseName =
          payload?.diseaseName ||
          payload?.diagnosis?.name ||
          payload?.result?.disease ||
          payload?.disease ||
          payload?.condition

        const risk =
          payload?.risk ?? payload?.severity ?? payload?.score ?? payload?.confidence

        setIsAnalyzing(false)
        setAnalysisComplete(true)

        if (mainText) {
          pushMessage({ sender: "bot", kind: "text", content: mainText })
        }

        if (diseaseName) {
          setDetection({ name: String(diseaseName), risk })
        } else if (mainText) {
          // 2) 텍스트에서 파싱 (한국어 문구들 대응)
          const rx =
            /(?:질병명|진단|의심)\s*[:：]\s*([^\n]+)/
              .exec(mainText) ||
            /응애|부저병|날개불구바이러스감염증|석고병/i
              .exec(mainText) // 키워드만 있을 때
          if (rx) setDetection({ name: rx[1]?.trim?.() || rx[0], risk })
        }

        if (Array.isArray(payload.questions) && payload.questions.length > 0) {
          pushMessage({
            sender: "bot",
            kind: "text",
            content:
              '추가 질문이 있어요. 아래에 답변해 주세요🤗\n답변 형식은 1. "1번 답입니다 2. 2번 답입니다 3. 3번 답입니다"처럼 한 번에 보내주세요:',
          })
          payload.questions.forEach((q: string, idx: number) => {
            pushMessage({ sender: "bot", kind: "text", content: `${idx + 1}. ${q}` })
          })
        }

        if (mainText && (!payload.questions || payload.questions.length === 0)) {
          setShowQnaBtn(true)
        }

        if (!mainText && !(payload.questions?.length)) {
          pushMessage({ sender: "bot", kind: "text", content: evt.data })
        }
      } catch {
        pushMessage({ sender: "bot", kind: "text", content: evt.data })
      }
    }

    const onError = () => {
      removeBotLoadingMessage()
      setIsBotLoading(false)
    }

    es.addEventListener("agent", onAgent as EventListener)
    es.addEventListener("error", onError as EventListener)

    return () => {
      es.removeEventListener("agent", onAgent as EventListener)
      es.removeEventListener("error", onError as EventListener)
      es.close()
    }
  }, [GW_URL, userId])

  const pushMessage = (msg: Omit<Message, "id" | "timestamp">) => {
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()) + Math.random().toString(36).slice(2), timestamp: Date.now(), ...msg },
    ])
  }
  const addBotLoadingMessage = () => {
    setMessages((prev) => (prev.some((m) => m.kind === "loading") ? prev : [...prev, {
      id: String(Date.now()), sender: "bot", kind: "loading", timestamp: Date.now(),
    }]))
  }
  const removeBotLoadingMessage = () => setMessages((prev) => prev.filter((m) => m.kind !== "loading"))

  // 파일 업로드 + 분석 요청 (fetch만 사용)
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const byMime = ALLOWED_TYPES.includes(file.type)
    const byExt = /\.(jpe?g|png)$/i.test(file.name)
    if (!byMime && !byExt) {
      pushMessage({ sender: "bot", kind: "text", content: "JPG/PNG 파일만 업로드할 수 있어요." })
      event.target.value = ""
      return
    }
    if (file.size > MAX_SIZE) {
      pushMessage({ sender: "bot", kind: "text", content: "파일 크기는 최대 10MB까지 가능합니다." })
      event.target.value = ""
      return
    }

    const localUrl = URL.createObjectURL(file)
    setUploadedImage(localUrl)
    pushMessage({ sender: "user", kind: "image", imageUrl: localUrl })

    setIsLoading(true)
    setIsAnalyzing(true)
    setShowQnaBtn(false)
    setIsBotLoading(true)
    addBotLoadingMessage()
    pushMessage({ sender: "bot", kind: "text", content: "업로드 중..." })

    try {
      const token = localStorage.getItem("accessToken") || ""

      // 1) 업로드용 SAS
      const sas = await getJSON<{ uploadUrl: string; blobUrl?: string; fileName: string }>(
        `${GW_URL}/ai/wsas?fileName=${encodeURIComponent(file.name)}`,
        { Authorization: `Bearer ${token}` }
      )
      const { uploadUrl, blobUrl, fileName } = sas
      if (!uploadUrl || !fileName) throw new Error("업로드용 SAS 또는 파일명이 없습니다.")

      // 2) Azure Blob PUT (fetch) - 진행률은 fetch로는 불가
      const putRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "Content-Type": file.type || "application/octet-stream",
        },
        body: file,
      })
      if (!putRes.ok) throw new Error(`PUT Blob 실패: ${putRes.status}`)
      pushMessage({ sender: "bot", kind: "text", content: "업로드 완료! 분석을 시작할게요 🔎" })

      // 3) 읽기 URL
      const ro = await getJSON<{ readOnlyUrl?: string }>(
        `${GW_URL}/ai/rsas?fileName=${encodeURIComponent(fileName)}`,
        { Authorization: `Bearer ${token}` }
      )
      const readOnlyUrl = ro?.readOnlyUrl ?? blobUrl
      if (!readOnlyUrl) throw new Error("읽기 URL을 얻지 못했습니다.")

      setUploadedImage(readOnlyUrl)
      setMessages(prev => {
        const copy = [...prev]
        // 가장 최근의 사용자 이미지 메시지를 찾아 교체
        for (let i = copy.length - 1; i >= 0; i--) {
          const m = copy[i]
          if (m.sender === "user" && m.kind === "image") {
            copy[i] = { ...m, imageUrl: readOnlyUrl }
            break
          }
        }
        return copy
      })

      // 4) 분석 요청
      await postJSON(`${GW_URL}/ai/analysis`, { userId, imageUrl: readOnlyUrl }, { Authorization: `Bearer ${token}` })

      pushMessage({ sender: "bot", kind: "text", content: "분석 요청 접수 완료! 결과가 준비되면 알려드릴게요 🐝" })
      // 결과는 SSE 'agent' 이벤트로 수신
    } catch (err) {
      console.error(err)
      removeBotLoadingMessage()
      setIsBotLoading(false)
      setIsAnalyzing(false)
      pushMessage({ sender: "bot", kind: "text", content: "⚠️ 업로드/분석 중 오류가 발생했습니다. 다시 시도해주세요." })
    } finally {
      setIsLoading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  // 사용자 답변 전송 (fetch)
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return
    const text = inputMessage.trim()

    pushMessage({ sender: "user", kind: "text", content: text })
    setInputMessage("")
    setIsBotLoading(true)
    addBotLoadingMessage()

    try {
      const token = localStorage.getItem("accessToken") || ""
      await postJSON(`${GW_URL}/api/answer`, { answers: [text] }, { userId, Authorization: `Bearer ${token}` })  // 250825: chatbot -> api
      // 응답은 SSE로
    } catch (err) {
      console.error("답변 전송 오류", err)
      removeBotLoadingMessage()
      setIsBotLoading(false)
      pushMessage({ sender: "bot", kind: "text", content: "⚠️ 답변 전송 실패" })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // QnA로 이어서 (fetch)
  const goQnA = async () => {
    if (isBotLoading) return
    removeBotLoadingMessage()
    setIsSaving(true)
    try {
      const token = localStorage.getItem("accessToken") || ""
      const payload = {
        userId,
        messages: messages
          .filter((m) => m.kind !== "loading")
          .map((m, i) => ({
            sender: m.sender,
            type: m.kind,
            text: m.content ?? null,
            url: m.imageUrl ?? null,
            ts: Date.now() + i,
          })),
      }
      await postJSON(`${GW_URL}/api/chat-sessions`, payload, { userId, Authorization: `Bearer ${token}` })
      router.push("/community/write?board=qna")
    } catch (e) {
      console.warn("서버 저장 실패 → localStorage fallback", e)
      const fallbackId = `local-${Date.now()}`
      localStorage.setItem(`chat:${fallbackId}`, JSON.stringify({ userId, messages }))
      router.push("community/write?board=qna")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              돌아가기
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">해충/질병 탐지</h1>
              <p className="text-sm text-gray-600">AI 기반 벌집 진단 서비스</p>
            </div>
          </div>
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 ml-auto">실시간 분석</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 이미지 업로드 섹션 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-amber-600" />
                  벌집 사진 업로드
                </CardTitle>
                <CardDescription>벌집 내부 사진을 업로드하면 AI가 해충과 질병을 분석합니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!uploadedImage ? (
                  <div
                    className="border-2 border-dashed border-amber-200 rounded-lg p-8 text-center cursor-pointer hover:border-amber-300 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">클릭하여 사진을 업로드하세요</p>
                    <p className="text-sm text-gray-400">JPG, PNG 파일 지원 (최대 10MB)</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={uploadedImage || "/placeholder.svg"}
                        alt="업로드된 벌집 사진"
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                            <p>AI 분석 중...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="w-full" disabled={isLoading}>
                      다른 사진 업로드
                    </Button>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>

            {(isAnalyzing || analysisComplete) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full"></div>
                        분석 진행 중
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        분석 완료
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                {analysisComplete && (
                  <CardContent>
                    <div className="space-y-3">
                      {detection && (
                        <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-sm">
                          <div className="font-semibold mb-1">🤖 AI 허니비 닥터</div>
                          <div>
                            진단 : <span className="font-medium">{detection.name}</span>
                            {detection.risk != null && (
                              <>
                                {" · "}위험도: {typeof detection.risk === "number" ? `${Math.round(Number(detection.risk) * 100)}%` : String(detection.risk)}
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 mt-4">
                        <Button className="w-full bg-amber-500 hover:bg-amber-600" onClick={goQnA} disabled={isSaving}>
                          <HelpCircle className="w-4 h-4 mr-2" />
                          QnA 작성하러 가기
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            )}
          </div>

          {/* 채팅 섹션 */}
          <div className="space-y-6">
            <Card className="h-[600px] flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-amber-600" />
                  AI 처방전 
                </CardTitle>
                <CardDescription>분석 결과에 대해 궁금한 점을 언제든 질문하세요</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col min-h-0">
                <ScrollArea className="flex-1 min-h-0 pr-4">
                  {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>벌집 사진을 업로드하면 AI 분석이 시작됩니다</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start gap-3 min-w-0 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {message.sender === "bot" && (
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-amber-600" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] w-fit rounded-lg p-3 overflow-hidden whitespace-pre-wrap break-words 
                              ${message.sender === "user" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            {message.kind === "image" && message.imageUrl && (
                              <Image
                                src={message.imageUrl}
                                alt="업로드된 이미지"
                                width={200}
                                height={120}
                                className="rounded mb-2 w-full max-h-40 object-contain"
                              />
                            )}
                            {message.kind === "loading" ? (
                              <div className="flex items-center gap-2">
                                <div className="loading-dots flex gap-1">
                                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.2s]" />
                                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                </div>
                                <span className="text-sm">답변을 생성 중...</span>
                              </div>
                            ) : (
                              <p className="text-sm">{message.content}</p>
                            )}
                          </div>
                          {message.sender === "user" && (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </div>
                      ))}
                      <div ref={bottomRef} />
                    </div>
                  )}
                </ScrollArea>

                {analysisComplete && (
                  <div className="border-t pt-4 mt-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="궁금한 점을 질문해보세요..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} disabled={!inputMessage.trim()} className="bg-amber-500 hover:bg-amber-600">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}