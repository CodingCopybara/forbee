"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, X } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function MessengerStyleChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요! '꿀봇이'입니다! 무엇을 도와드릴까요? 🐝",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSend = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        content: "질문을 잘 받았습니다. 전문가가 곧 답변드릴게요!",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, reply])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-amber-500 text-white shadow-lg text-2xl z-50"
        >
          🐝
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-[19px] right-6 w-96 h-[500px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-50 border">
          {/* 헤더 */}
          <div className="bg-amber-500 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span className="text-xl">🐝</span>
              꿀봇이
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 메시지 영역 */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 text-sm rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-white rounded-br-sm"
                      : "bg-gray-200 text-black rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* 입력창 */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="메시지를 입력하세요..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-amber-500 hover:bg-amber-600 text-white px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
