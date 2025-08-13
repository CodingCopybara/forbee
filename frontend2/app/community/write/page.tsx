"use client"

import type React from "react"

import { useState } from "react"
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
  // 샘플 채팅 데이터 (실제로는 props나 context에서 받아올 것)
  const chatHistory: ChatMessage[] = [
    {
      id: "1",
      type: "user",
      content: "벌집 사진을 업로드했습니다. 분석을 시작해주세요.",
      timestamp: new Date(Date.now() - 300000),
      imageUrl: "/beehive-inspection.png",
    },
    {
      id: "2",
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
3. 2주 후 재검사 필요`,
      timestamp: new Date(Date.now() - 297000),
    },
    {
      id: "3",
      type: "user",
      content: "치료제는 어떤 것을 사용해야 하나요? 그리고 치료 기간은 얼마나 걸리나요?",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: "4",
      type: "bot",
      content:
        "바로아 진드기 치료에 대해 더 자세히 설명드리겠습니다. 현재 상황에서는 포름산 기반 치료제를 권장합니다. 치료 기간은 보통 2-3주 정도 소요되며, 치료 과정에서 궁금한 점이 있으시면 언제든 말씀해주세요.",
      timestamp: new Date(Date.now() - 239000),
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-600" />
            채팅 이력
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {chatHistory.map((message) => (
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
                    <img
                      src={message.imageUrl || "/placeholder.svg"}
                      alt="업로드된 이미지"
                      className="rounded mb-2 w-full h-24 object-cover"
                    />
                  )}
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
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
        </div>

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
