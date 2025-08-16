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

const API_BASE = process.env.NEXT_PUBLIC_GW_URL ?? ""

export default function MessengerStyleChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요! '꿀봇이'입니다!\n무엇을 도와드릴까요? 🐝",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!inputMessage.trim() || loading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInputMessage("")
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ question: inputMessage }),
      })
      const data = await res.json()

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: data.answer ?? "죄송해요. 잠시 후 다시 시도해주세요.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
    } catch {
      const errMsg: Message = {
        id: (Date.now() + 2).toString(),
        content: "서버 연결에 문제가 있어요. 잠시 후 다시 시도해주세요.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errMsg])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-amber-500 text-white shadow-lg text-2xl z-[2000]"
        >
          🐝
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-[19px] right-6 w-96 h-[500px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-[2000] border">
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
                  className={`max-w-[75%] px-4 py-2 text-sm rounded-2xl leading-relaxed break-words whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-white rounded-br-sm"
                      : "bg-gray-200 text-black rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-xs text-gray-500 px-2">응답 작성 중…</div>
            )}
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
                disabled={loading}
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
