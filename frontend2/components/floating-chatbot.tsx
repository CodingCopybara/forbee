"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요! 양봉 AI 어시스턴트입니다. 양봉과 관련된 궁금한 점이 있으시면 언제든 물어보세요! 🐝",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleButtonClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsOpen(true)
      setIsClicked(false)
    }, 200)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "질문을 잘 받았습니다. 양봉 전문가가 곧 답변드리겠습니다. 더 자세한 상담이 필요하시면 해충/질병 탐지 서비스나 커뮤니티 QnA를 이용해보세요!",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* 챗봇 버튼 */}
      {!isOpen && (
        <Button
          onClick={handleButtonClick}
          className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg z-50 p-0 transition-all duration-200 hover:scale-110 ${
            isClicked ? "scale-125" : "scale-100"
          }`}
          size="lg"
        >
          <div className="text-2xl">🐝</div>
        </Button>
      )}

      {/* 챗봇 창 */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-amber-500 text-white rounded-t-lg flex flex-row items-center justify-between p-4">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <span className="text-xl">🐝</span>
              양봉 AI 어시스턴트
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-amber-600 p-1 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* 메시지 영역 */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("ko-KR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* 입력 영역 */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="양봉에 대해 궁금한 점을 물어보세요..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-amber-500 hover:bg-amber-600 text-white px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
