"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Camera,
  Upload,
  MessageSquare,
  Send,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Bot,
  User,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  imageUrl?: string
}

export default function PestDetectionPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setUploadedImage(imageUrl)

        // 분석 시작
        setIsAnalyzing(true)

        // 사용자 메시지 추가
        const userMessage: Message = {
          id: Date.now().toString(),
          type: "user",
          content: "벌집 사진을 업로드했습니다. 분석을 시작해주세요.",
          timestamp: new Date(),
          imageUrl: imageUrl,
        }
        setMessages([userMessage])

        // 3초 후 분석 완료 시뮬레이션
        setTimeout(() => {
          setIsAnalyzing(false)
          setAnalysisComplete(true)

          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: "bot",
            content: `분석이 완료되었습니다. 

**진단 결과:**
- 바로아 진드기(Varroa mites) 감염 의심
- 위험도: 중간 (60%)
- 감염된 벌방 수: 약 15-20개 추정

**주요 증상:**
- 벌방 뚜껑에 작은 구멍들이 관찰됨
- 일부 유충에서 갈색 반점 확인
- 성충 꿀벌의 날개 기형 징후

**권장 조치사항:**
1. 즉시 바로아 진드기 치료제 적용
2. 감염된 벌방 제거 고려
3. 2주 후 재검사 필요

더 자세한 상담이 필요하시면 언제든 질문해주세요.`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMessage])
        }, 3000)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          "질문해주셔서 감사합니다. 바로아 진드기 치료에 대해 더 자세히 설명드리겠습니다. 현재 상황에서는 포름산 기반 치료제를 권장합니다. 치료 과정에서 궁금한 점이 있으시면 언제든 말씀해주세요.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* 간단한 페이지 타이틀만 유지 */}
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
                    <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="w-full">
                      다른 사진 업로드
                    </Button>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>

            {/* 분석 상태 카드 */}
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
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">바로아 진드기 감염 의심</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        <span className="text-sm">위험도: 중간 (60%)</span>
                      </div>
                      <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600" asChild>
                        <Link href="/community/write?board=qna&category=disease">
                          <HelpCircle className="w-4 h-4 mr-2" />
                          QnA 작성하러 가기
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            )}
          </div>

          {/* 채팅 섹션 */}
          <div className="space-y-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-amber-600" />
                  AI 진단 상담
                </CardTitle>
                <CardDescription>분석 결과에 대해 궁금한 점을 언제든 질문하세요</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 pr-4">
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
                          className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {message.type === "bot" && (
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-amber-600" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.type === "user" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            {message.imageUrl && (
                              <Image
                                src={message.imageUrl || "/placeholder.svg"}
                                alt="업로드된 이미지"
                                width={200}
                                height={120}
                                className="rounded mb-2 w-full h-24 object-cover"
                              />
                            )}
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                            <p
                              className={`text-xs mt-1 ${message.type === "user" ? "text-amber-100" : "text-gray-500"}`}
                            >
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          {message.type === "user" && (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </div>
                      ))}
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
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="bg-amber-500 hover:bg-amber-600"
                      >
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
