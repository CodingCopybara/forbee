"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Upload, ArrowLeft, MessageSquare, Bot, User } from "lucide-react"
import Link from "next/link"

const categories = {
  free: [
    { value: "general", label: "일반" },
    { value: "harvest", label: "수확후기" },
    { value: "question", label: "질문" },
    { value: "info", label: "정보공유" },
    { value: "review", label: "후기" },
  ],
  notice: [
    { value: "announcement", label: "공지사항" },
    { value: "update", label: "업데이트" },
    { value: "event", label: "이벤트" },
  ],
  qna: [
    { value: "disease", label: "질병진단" },
    { value: "management", label: "관리문의" },
    { value: "ai-service", label: "AI서비스" },
    { value: "equipment", label: "장비문의" },
    { value: "location", label: "위치선정" },
  ],
}

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  imageUrl?: string
}

function ChatHistoryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const GW_URL = process.env.NEXT_PUBLIC_GW_URL || ""
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const currentUserId = () => {
    const email = (typeof window !== "undefined" && localStorage.getItem("username")) || ""
    return email.includes("@") ? email.split("@")[0] : email
  }

  // fetch 유틸(GET)
  const getJSON = async <T,>(url: string, headers: Record<string, string> = {}) => {
    const res = await fetch(url, { headers })
    if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`)
    return (await res.json()) as T
  }

  const loadLatest = async () => {
    if (!GW_URL) {
      setError("게이트웨이 URL(NEXT_PUBLIC_GW_URL)이 설정되지 않았습니다.")
      return
    }
    setLoading(true)
    setError("")
    try {
      const token = (typeof window !== "undefined" && localStorage.getItem("accessToken")) || ""
      type RawMsg = { sender: "user" | "bot"; type: "text" | "image"; text?: string | null; url?: string | null; ts?: number }
      const data = await getJSON<{ messages?: RawMsg[] }>(`${GW_URL}/api/chat-sessions/latest`, {
        userId: currentUserId(),
        Authorization: `Bearer ${token}`,
      })

      const mapped: ChatMessage[] = Array.isArray(data?.messages)
        ? data!.messages.map((m, i) => ({
            id: String(m.ts ?? i),
            type: m.sender,
            content: m.text ?? "",
            imageUrl: m.url ?? undefined,
            timestamp: new Date(m.ts ?? Date.now()),
          }))
        : []

      setMessages(mapped)
    } catch (e) {
      console.error(e)
      setError("대화내역을 불러오지 못했습니다.")
    } finally {
      setLoading(false)
    }
  }

  // 모달이 열릴 때마다 새로고침
  useEffect(() => {
    if (isOpen) {
      loadLatest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-direction flex-col">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-600" />
            채팅 이력
          </h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadLatest} disabled={loading}>
              새로고침
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 본문 */}
        <div className="flex-1 overflow-y-auto p-6">
          {error ? (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">⚠️ {error}</div>
          ) : loading ? (
            <div className="text-sm text-gray-600">불러오는 중...</div>
          ) : messages.length === 0 ? (
            <div className="text-sm text-gray-600">최근 대화가 없어요.</div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}>
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
                      <img
                        src={message.imageUrl || "/placeholder.svg"}
                        alt="업로드된 이미지"
                        className="rounded mb-2 w-full h-24 object-cover"
                      />
                    )}
                    <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === "user" ? "text-amber-100" : "text-gray-500"}`}>
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
        </div>

        {/* 푸터 */}
        <div className="p-6 border-t bg-gray-50">
          <p className="text-sm text-gray-600 text-center">이 채팅 내용을 참고하여 전문가에게 질문을 작성해보세요.</p>
        </div>
      </div>
    </div>
  )
}

export default function WritePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [boardType, setBoardType] = useState(searchParams.get("board") || "free")
  const [category, setCategory] = useState(searchParams.get("category") || "")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [showChatHistory, setShowChatHistory] = useState(false)

  const isFromDiagnosis = searchParams.get("board") === "qna"

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 5) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles].slice(0, 5)) // 최대 5개 파일
    }
  }

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기서 실제 게시글 작성 로직 구현
    console.log({ boardType, category, title, content, tags, files })
    router.push("/community")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/community">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              목록으로
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">글쓰기</h1>
            <p className="text-gray-600">새로운 게시글을 작성해보세요</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>게시글 작성</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 게시판 선택 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">게시판 선택</label>
                  <Select value={boardType} onValueChange={setBoardType}>
                    <SelectTrigger>
                      <SelectValue placeholder="게시판을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">자유게시판</SelectItem>
                      <SelectItem value="notice">공지사항</SelectItem>
                      <SelectItem value="qna">Q&A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories[boardType as keyof typeof categories].map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* 제목 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  required
                />
              </div>

              {/* 내용 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="내용을 입력하세요"
                  rows={12}
                  required
                />
                {isFromDiagnosis && (
                  <div className="mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setShowChatHistory(true)}
                      className="text-amber-600 border-amber-200 hover:bg-amber-50"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      채팅 이력 보기
                    </Button>
                  </div>
                )}
              </div>

              {/* 태그 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">태그 (최대 5개)</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="태그를 입력하고 Enter를 누르세요"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                  />
                  <Button type="button" onClick={handleAddTag} variant="outline">
                    추가
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      #{tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 파일 첨부 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">파일 첨부 (최대 5개)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">파일을 드래그하거나 클릭하여 업로드하세요</p>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" variant="outline" className="cursor-pointer bg-transparent">
                      파일 선택
                    </Button>
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <span className="text-sm">{file.name}</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 버튼 */}
          <div className="flex justify-end gap-4 mt-6">
            <Link href="/community">
              <Button type="button" variant="outline">
                취소
              </Button>
            </Link>
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
              게시글 작성
            </Button>
          </div>
        </form>

        <ChatHistoryModal isOpen={showChatHistory} onClose={() => setShowChatHistory(false)} />
      </div>
    </div>
  )
}
