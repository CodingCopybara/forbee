"use client"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Upload, ArrowLeft, MessageSquare, Bot, User, FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")
// 백엔드가 응답에 publicContainer를 내려주지 않는 경우를 대비한 기본 플래그
const CONTAINER_PUBLIC_DEFAULT =
  (process.env.NEXT_PUBLIC_AZURE_CONTAINER_PUBLIC || "true").toLowerCase() === "true"

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
} as const

type ChatMessage = {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  imageUrl?: string
}

/* =========================
 * 공용 유틸
 * ========================= */
const roleFromLS = () => (typeof window !== "undefined" ? (localStorage.getItem("role") || "").toUpperCase() : "")
const tokenFromLS = () => (typeof window !== "undefined" ? localStorage.getItem("accessToken") || "" : "")
const usernameFromLS = () => {
  const u = (typeof window !== "undefined" ? localStorage.getItem("username") : "") || ""
  return u.includes("@") ? u.split("@")[0] : u
}

/* =========================
 * 채팅 이력 모달 (그대로)
 * ========================= */
function ChatHistoryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const GW_URL = process.env.NEXT_PUBLIC_GW_URL || ""
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const currentUserId = () => {
    const email = (typeof window !== "undefined" && localStorage.getItem("username")) || ""
    return email.includes("@") ? email.split("@")[0] : email
  }

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
      const data = await getJSON<{ messages?: RawMsg[] }>(`${GW_URL}/chatbot/chat-sessions/latest`, {
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

  useEffect(() => {
    if (isOpen) loadLatest()
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

/* =========================
 * 글쓰기 페이지
 * - 본문: contenteditable(이미지 <img> 태그로 직접 삽입)
 * - 이미지: PNG/JPG만, 본문에만 삽입
 * - PDF: 첨부 목록에만 추가(본문 X)
 * ========================= */
export default function WritePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [boardType, setBoardType] = useState(searchParams.get("board") || "free")
  const [category, setCategory] = useState(searchParams.get("category") || "")
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [showChatHistory, setShowChatHistory] = useState(false)

  // 본문 에디터 & 첨부
  const editorRef = useRef<HTMLDivElement | null>(null)
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const pdfInputRef = useRef<HTMLInputElement | null>(null)
  const [attachments, setAttachments] = useState<{ name: string; url: string; type: "pdf" | "file" }[]>([])

  const isFromDiagnosis = searchParams.get("board") === "qna"

  // 도커 빌드 시 사용
  // useEffect(() => {
  //   const styleId = "contenteditable-placeholder-style";
    
  //   if (document.getElementById(styleId)) return;

  //   const style = document.createElement("style");
  //   style.id = styleId;
  //   style.innerHTML = `
  //     [data-placeholder]:empty:before {
  //       content: attr(data-placeholder);
  //       color: #9ca3af; /* gray-400 */
  //     }
  //   `;
  //   document.head.appendChild(style);

  //   return () => {
  //     const styleElement = document.getElementById(styleId);
  //     if (styleElement) {
  //       document.head.removeChild(styleElement);
  //     }
  //   };
  // }, []);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 5) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }
  const handleRemoveTag = (t: string) => setTags(tags.filter((v) => v !== t))

  const syncFromEditor = () => {
    // 사용 시점에 innerHTML 읽습니다. (여기선 placeholder 처리 목적으로만 둠)
  }

  const insertHtmlAtCaret = (html: string) => {
    const el = editorRef.current
    if (!el) return
    el.focus()
    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0) {
      el.insertAdjacentHTML("beforeend", html)
    } else {
      const range = sel.getRangeAt(0)
      range.deleteContents()
      const tmp = document.createElement("div")
      tmp.innerHTML = html
      const frag = document.createDocumentFragment()
      let node: ChildNode | null
      let lastNode: ChildNode | null = null
      while ((node = tmp.firstChild)) {
        lastNode = frag.appendChild(node)
      }
      range.insertNode(frag)
      if (lastNode) {
        range.setStartAfter(lastNode)
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }

  /* =========================
   * 업로드: wsas/rsas + Azure PUT
   * ========================= */
  type WsasResp = {
    uploadUrl: string
    blobUrl: string
    fileName: string
    publicContainer?: string | boolean
  }

  // 1) 백엔드(wsas)에서 업로드용 SAS/고유 파일명 받아오기
  async function getWriteSasFromGW(originalName: string): Promise<WsasResp> {
    if (!GW) throw new Error("NEXT_PUBLIC_GW_URL 미설정")
    const url = `${GW}/ai/wsas?fileName=${encodeURIComponent(originalName)}`
    const res = await fetch(url, { method: "GET", cache: "no-store" })
    if (!res.ok) {
      const msg = await res.text().catch(() => "")
      throw new Error(`wsas 실패 ${res.status} ${msg}`)
    }
    return (await res.json()) as WsasResp
  }

  // 2) (비공개 컨테이너일 때) 읽기 전용 링크 발급
  async function getReadSasFromGW(uniqueName: string): Promise<string> {
    if (!GW) throw new Error("NEXT_PUBLIC_GW_URL 미설정")
    const url = `${GW}/ai/rsas?fileName=${encodeURIComponent(uniqueName)}`
    const res = await fetch(url, { method: "GET", cache: "no-store" })
    if (!res.ok) {
      const msg = await res.text().catch(() => "")
      throw new Error(`rsas 실패 ${res.status} ${msg}`)
    }
    const json = await res.json()
    return String(json.readOnlyUrl || "")
  }

  // 3) 실제 PUT 업로드 (이미지/PDF 공용)
  async function uploadViaSas(file: File): Promise<{ publicUrl: string; uniqueName: string; isPublic: boolean }> {
    const { uploadUrl, blobUrl, fileName, publicContainer } = await getWriteSasFromGW(file.name)

    const put = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob", // 중요
        "Content-Type": file.type || "application/octet-stream",
      },
      body: file,
    })
    if (!put.ok) throw new Error(`Azure 업로드 실패 ${put.status}`)

    // 컨테이너 공개 여부 결정: 응답 > 환경변수 기본값
    const isPublic =
      typeof publicContainer === "string"
        ? publicContainer.toLowerCase() === "true"
        : typeof publicContainer === "boolean"
        ? publicContainer
        : CONTAINER_PUBLIC_DEFAULT

    if (isPublic) {
      return { publicUrl: blobUrl, uniqueName: fileName, isPublic: true }
    } else {
      const readUrl = await getReadSasFromGW(fileName)
      return { publicUrl: readUrl, uniqueName: fileName, isPublic: false }
    }
  }

  /* =========================
   * 파일 선택 핸들러
   * ========================= */
  // 이미지 삽입 (PNG/JPG만, 본문에 <img>로 직접 삽입)
  const onPickImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    e.target.value = ""
    if (!files.length) return

    const MAX_IMAGE_SIZE = 512 * 1024 

    for (const f of files) {
      if (!(f.type === "image/png" || f.type === "image/jpeg")) {
        alert("PNG 또는 JPG 파일만 업로드할 수 있습니다.")
        continue
      }

      if (f.size > MAX_IMAGE_SIZE) {
        alert(`500KB를 초과하여 업로드할 수 없습니다.`)
        continue
      }

      try {
        const { publicUrl } = await uploadViaSas(f)
        insertHtmlAtCaret(
          `<img src="${publicUrl}" alt="${f.name}" style="max-width:100%;height:auto;display:block;margin:0.5rem 0;" />`
        )
        syncFromEditor()
      } catch (err) {
        console.error(err)
        alert(`이미지 업로드 실패: ${f.name}`)
      }
    }
  }


  // PDF 첨부 (본문 X, 첨부목록에만)
  const onPickPdf = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    if (file.type !== "application/pdf") {
      alert("PDF만 업로드할 수 있습니다.")
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      alert("최대 20MB까지 허용됩니다.")
      return
    }
    try {
      const { publicUrl } = await uploadViaSas(file)
      setAttachments((prev) => [...prev, { name: file.name, url: publicUrl, type: "pdf" }])
    } catch (err) {
      console.error(err)
      alert("PDF 업로드 실패")
    }
  }

  const removeAttachment = (idx: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== idx))
  }

  // 저장: contenteditable의 innerHTML + 첨부(PDF만)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!GW) {
      alert("게이트웨이 URL이 설정되지 않았습니다.")
      return
    }

    const el = editorRef.current
    const contentHtml = (el?.innerHTML || "").trim()

    // ✅ 본문 길이 제한 추가 (HTML 포함 기준)
    const MAX_CONTENT_LENGTH = 10000
    if (contentHtml.length > MAX_CONTENT_LENGTH) {
      alert(`본문이 너무 깁니다. ${MAX_CONTENT_LENGTH.toLocaleString()}자 이하로 작성해 주세요.`)
      return
    }

    if (!title.trim() || !contentHtml) {
      alert("제목과 내용을 입력해 주세요.")
      return
    }

    try {
      const role = roleFromLS()
      const token = tokenFromLS()
      const author = usernameFromLS() || "익명"

      const payload = {
        title,
        content: contentHtml,
        category: boardType,
        author,
        attachments,
        tags,
        subCategory: category,
      }

      const res = await fetch(`${GW}/posts/writepost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Role: role,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      })

      if (!res.ok) {
        const txt = await res.text().catch(() => "")
        throw new Error(`POST /posts/writepost -> ${res.status} ${txt}`)
      }

      alert("작성 완료!")
      router.replace(`/community/${boardType}/1`)
    } catch (err) {
      console.error(err)
      alert("작성에 실패했습니다.")
    }
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/community/${boardType}/1`} prefetch={false}>
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
              {/* 게시판/카테고리 */}
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
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" required />
              </div>

              {/* 본문 (contenteditable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
                <div
                  ref={editorRef}
                  contentEditable
                  onInput={syncFromEditor}
                  className="min-h-[320px] p-3 border rounded-md bg-white leading-7 outline-none"
                  // placeholder 흉내
                  data-placeholder="내용을 입력하세요..."
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                />
                {/* 접근성을 위해 시각적으로만 숨긴 안내 */}
                <Textarea className="sr-only" aria-hidden value="" readOnly />
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

              {/* 업로드 툴바 */}
              <div className="grid gap-3 md:grid-cols-2">
                {/* 이미지 (본문에 삽입) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이미지 삽입 (PNG/JPG)</label>
                  <input
                    ref={imageInputRef}
                    type="file"
                    multiple
                    onChange={onPickImages}
                    className="hidden"
                    accept="image/png,image/jpeg"
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">PNG 또는 JPG 이미지를 업로드하면 본문에 <b>직접</b> 삽입됩니다.</p>
                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer bg-transparent"
                      onClick={() => imageInputRef.current?.click()}
                    >
                      이미지 선택
                    </Button>
                  </div>
                </div>

                {/* PDF (첨부 목록 전용) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PDF 첨부</label>
                  <input ref={pdfInputRef} type="file" accept="application/pdf" className="hidden" onChange={onPickPdf} />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">PDF는 본문에 삽입되지 않고 아래 첨부 목록에만 추가됩니다.</p>
                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer bg-transparent"
                      onClick={() => pdfInputRef.current?.click()}
                    >
                      PDF 선택
                    </Button>
                  </div>
                </div>
              </div>

              {/* 첨부 목록 (PDF만) */}
              {attachments.length > 0 && (
                <div className="bg-gray-50 border rounded-md p-3">
                  <h4 className="font-medium mb-2">첨부파일</h4>
                  <ul className="space-y-2">
                    {attachments.map((att, i) => (
                      <li key={att.url + i} className="flex items-center justify-between">
                        <a
                          href={att.url}
                          target="_blank"
                          rel="noopener"
                          className="text-sm underline break-all flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          {att.name}
                        </a>
                        <Button variant="ghost" size="sm" onClick={() => removeAttachment(i)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 태그 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">태그 (최대 5개)</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="태그를 입력하고 Enter를 누르세요"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddTag()
                      }
                    }}
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
            </CardContent>
          </Card>

          {/* 버튼 */}
          <div className="flex justify-end gap-4 mt-6">
            <Link href={`/community/${boardType}/1`} prefetch={false}>
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

  useEffect(() => {
    const style = document?.createElement?.("style")
    if (style) {
      style.innerHTML = `
      [data-placeholder]:empty:before {
        content: attr(data-placeholder);
        color: #9ca3af; /* gray-400 */
      }
      `
      document.head.appendChild(style)
    }
  }, [])


