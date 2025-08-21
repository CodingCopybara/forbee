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
import { X, Upload, ArrowLeft, MessageSquare, Bot, User, FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")
// 백엔드가 응답에 publicContainer를 내려주지 않는 경우를 대비한 기본 플래그
const CONTAINER_PUBLIC_DEFAULT =
  (process.env.NEXT_PUBLIC_AZURE_CONTAINER_PUBLIC || "true").toLowerCase() === "true"

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
 * 커스텀 Alert 팝업
 * - 브라우저 기본 alert가 아닌, 화면 중앙 모달
 * - 주소/도메인 노출 없음
 * ========================= */
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

/* =========================
 * 채팅 이력 모달 (오류는 상위에서 내려준 onAlert로 처리)
 * ========================= */
function ChatHistoryModal({ isOpen, onClose, onAlert }: { isOpen: boolean; onClose: () => void; onAlert: (m: string) => void }) {
  const GW_URL = process.env.NEXT_PUBLIC_GW_URL || ""
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const currentUserId = () => {
    const email = (typeof window !== "undefined" && localStorage.getItem("username")) || ""
    return email.includes("@") ? email.split("@")[0] : email
  }

  const getJSON = async <T,>(url: string, headers: Record<string, string> = {}) => {
    const res = await fetch(url, { headers })
    if (!res.ok) throw new Error(`요청 실패 (${res.status})`)
    return (await res.json()) as T
  }

  const loadLatest = async () => {
    if (!GW_URL) {
      onAlert("게이트웨이 URL(NEXT_PUBLIC_GW_URL)이 설정되지 않았습니다.")
      return
    }
    setLoading(true)
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
      onAlert("대화내역을 불러오지 못했습니다.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) void loadLatest()
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
          {loading ? (
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
 * 글쓰기 페이지 (모든 오류 커스텀 팝업)
 * ========================= */
export default function WritePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [boardType] = useState(searchParams.get("board") || "free")
  const [title, setTitle] = useState("")
  const [showChatHistory, setShowChatHistory] = useState(false)

  // 커스텀 alert 상태
  const [alertMsg, setAlertMsg] = useState("")
  const showAlert = (m: string) => setAlertMsg(m)

  // 전역 오류도 커스텀 팝업으로
  useEffect(() => {
    const rej = (ev: PromiseRejectionEvent) => showAlert(String(ev?.reason?.message || ev?.reason || "알 수 없는 오류"))
    const err = (ev: ErrorEvent) => showAlert(String(ev?.error?.message || ev?.message || "알 수 없는 오류"))
    window.addEventListener("unhandledrejection", rej as any)
    window.addEventListener("error", err as any)
    return () => {
      window.removeEventListener("unhandledrejection", rej as any)
      window.removeEventListener("error", err as any)
    }
  }, [])

  // 본문 에디터 & 첨부
  const editorRef = useRef<HTMLDivElement | null>(null)
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const pdfInputRef = useRef<HTMLInputElement | null>(null)
  const [attachments, setAttachments] = useState<{ name: string; url: string; type: "pdf" | "file" }[]>([])

  const isFromDiagnosis = searchParams.get("board") === "qna"

  // placeholder 스타일 주입
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      [data-placeholder]:empty:before { content: attr(data-placeholder); color: #9ca3af; }
    `
    document.head.appendChild(style)
    return () => {
      try { document.head.removeChild(style) } catch {}
    }
  }, [])

  const syncFromEditor = () => {}

  const insertHtmlAtCaret = (html: string) => {
    try {
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
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while ((node = tmp.firstChild)) lastNode = frag.appendChild(node)
        range.insertNode(frag)
        if (lastNode) {
          range.setStartAfter(lastNode)
          range.collapse(true)
          sel.removeAllRanges()
          sel.addRange(range)
        }
      }
    } catch (e) {
      console.error(e)
      showAlert("본문에 내용을 삽입하는 중 오류가 발생했습니다.")
    }
  }

  /* =========================
   * 업로드: wsas/rsas + Azure PUT
   * ========================= */
  type WsasResp = { uploadUrl: string; blobUrl: string; fileName: string; publicContainer?: string | boolean }

  async function getWriteSasFromGW(originalName: string): Promise<WsasResp> {
    if (!GW) throw new Error("게이트웨이 URL이 설정되지 않았습니다.")
    const url = `${GW}/ai/wsas?fileName=${encodeURIComponent(originalName)}`
    const res = await fetch(url, { method: "GET", cache: "no-store" })
    if (!res.ok) throw new Error("업로드 준비에 실패했습니다. 잠시 후 다시 시도해주세요.")
    return (await res.json()) as WsasResp
  }

  async function getReadSasFromGW(uniqueName: string): Promise<string> {
    if (!GW) throw new Error("게이트웨이 URL이 설정되지 않았습니다.")
    const url = `${GW}/ai/rsas?fileName=${encodeURIComponent(uniqueName)}`
    const res = await fetch(url, { method: "GET", cache: "no-store" })
    if (!res.ok) throw new Error("파일 접근 권한 요청에 실패했습니다.")
    const json = await res.json()
    return String(json.readOnlyUrl || "")
  }

  async function uploadViaSas(file: File): Promise<{ publicUrl: string; uniqueName: string; isPublic: boolean }> {
    try {
      const { uploadUrl, blobUrl, fileName, publicContainer } = await getWriteSasFromGW(file.name)
      const put = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "x-ms-blob-type": "BlockBlob", "Content-Type": file.type || "application/octet-stream" },
        body: file,
      })
      if (!put.ok) throw new Error("파일 업로드에 실패했습니다.")

      const isPublic =
        typeof publicContainer === "string" ? publicContainer.toLowerCase() === "true" :
        typeof publicContainer === "boolean" ? publicContainer : CONTAINER_PUBLIC_DEFAULT

      if (isPublic) {
        return { publicUrl: blobUrl, uniqueName: fileName, isPublic: true }
      } else {
        const readUrl = await getReadSasFromGW(fileName)
        return { publicUrl: readUrl, uniqueName: fileName, isPublic: false }
      }
    } catch (e) {
      console.error(e)
      showAlert(`${file.name} 업로드 중 오류가 발생했습니다.`)
      throw e
    }
  }

  /* =========================
   * 파일 선택 핸들러
   * ========================= */
  const onPickImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    e.target.value = ""
    if (!files.length) return

    const MAX_IMAGE_SIZE = 512 * 1024 // 512KB

    for (const f of files) {
      if (!(f.type === "image/png" || f.type === "image/jpeg")) {
        showAlert("PNG 또는 JPG 파일만 업로드할 수 있습니다.")
        continue
      }
      if (f.size > MAX_IMAGE_SIZE) {
        showAlert("최대 512KB까지 허용됩니다.")
        continue
      }
      try {
        const { publicUrl } = await uploadViaSas(f)
        insertHtmlAtCaret(`<img src="${publicUrl}" alt="${f.name}" style="max-width:100%;height:auto;display:block;margin:0.5rem 0;" />`)
        syncFromEditor()
      } catch (err) {
        // 이미 showAlert 처리됨
      }
    }
  }

  const onPickPdf = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    if (file.type !== "application/pdf") {
      showAlert("PDF만 업로드할 수 있습니다.")
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      showAlert("최대 20MB까지 허용됩니다.")
      return
    }
    try {
      const { publicUrl } = await uploadViaSas(file)
      setAttachments((prev) => [...prev, { name: file.name, url: publicUrl, type: "pdf" }])
    } catch (err) {
      // 이미 showAlert 처리됨
    }
  }

  const removeAttachment = (idx: number) => setAttachments((prev) => prev.filter((_, i) => i !== idx))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!GW) {
      showAlert("게이트웨이 URL이 설정되지 않았습니다.")
      return
    }

    const el = editorRef.current
    const contentHtml = (el?.innerHTML || "").trim()

    const MAX_CONTENT_LENGTH = 10000
    if (contentHtml.length > MAX_CONTENT_LENGTH) {
      showAlert(`본문이 너무 깁니다. ${MAX_CONTENT_LENGTH.toLocaleString()}자 이하로 작성해 주세요.`)
      return
    }

    if (!title.trim() || !contentHtml) {
      showAlert("제목과 내용을 입력해 주세요.")
      return
    }

    try {
      const role = roleFromLS()
      const token = tokenFromLS()
      const author = usernameFromLS() || "익명"

      const payload = { title, content: contentHtml, category: boardType, author, attachments }

      const res = await fetch(`${GW}/posts/writepost`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Role: role, ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify(payload),
        cache: "no-store",
      })

      if (!res.ok) throw new Error("게시글 작성에 실패했습니다.")

      showAlert("작성 완료!")
      router.replace(`/community/${boardType}/1`)
    } catch (err) {
      console.error(err)
      showAlert("작성에 실패했습니다. 잠시 후 다시 시도해 주세요.")
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
                  data-placeholder="내용을 입력하세요..."
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                />
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
                  <input ref={imageInputRef} type="file" multiple onChange={onPickImages} className="hidden" accept="image/png,image/jpeg" />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">PNG 또는 JPG 이미지를 업로드하면 본문에 <b>직접</b> 삽입됩니다.</p>
                    <Button type="button" variant="outline" className="cursor-pointer bg-transparent" onClick={() => imageInputRef.current?.click()}>
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
                    <Button type="button" variant="outline" className="cursor-pointer bg-transparent" onClick={() => pdfInputRef.current?.click()}>
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
                        <a href={att.url} target="_blank" rel="noopener" className="text-sm underline break-all flex items-center gap-2">
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
            </CardContent>
          </Card>

          {/* 버튼 */}
          <div className="flex justify-end gap-4 mt-6">
            <Link href={`/community/${boardType}/1`} prefetch={false}>
              <Button type="button" variant="outline">취소</Button>
            </Link>
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">게시글 작성</Button>
          </div>
        </form>

        <ChatHistoryModal isOpen={showChatHistory} onClose={() => setShowChatHistory(false)} onAlert={showAlert} />
      </div>

      {/* 🔔 커스텀 Alert 모달 */}
      <AlertModal message={alertMsg} onClose={() => setAlertMsg("")} />
    </div>
  )
}
