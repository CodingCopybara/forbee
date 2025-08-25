"use client"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Upload, ArrowLeft, FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

/* =========================
 * 환경/상수
 * ========================= */
const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")
const CONTAINER_PUBLIC_DEFAULT =
  (process.env.NEXT_PUBLIC_AZURE_CONTAINER_PUBLIC || "true").toLowerCase() === "true"

/* =========================
 * 타입
 * ========================= */
type Post = {
  id: string | number
  title: string
  content: string // 서버에 HTML로 저장되었다고 가정
  author: string
  category?: "free" | "notice" | "qna"
  attachments?: { name: string; url: string; type: "pdf" | "file" }[]
}

/* =========================
 * 공용 유틸
 * ========================= */
const roleFromLS = () =>
  (typeof window !== "undefined" ? (localStorage.getItem("role") || "").toUpperCase() : "")

const tokenFromLS = () =>
  (typeof window !== "undefined" ? localStorage.getItem("accessToken") || "" : "")

const usernameFromLS = () => {
  const u = (typeof window !== "undefined" ? localStorage.getItem("username") : "") || ""
  return u.includes("@") ? u.split("@")[0] : u
}

const authHeaders = () => {
  const role = roleFromLS()
  const token = tokenFromLS()
  return { Role: role, ...(token ? { Authorization: `Bearer ${token}` } : {}) }
}

/* =========================
 * 커스텀 Alert 모달
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
 * Edit Page
 * ========================= */
export default function PostEditPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const id = params?.id

  // 상태
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [title, setTitle] = useState("")
  const editorRef = useRef<HTMLDivElement | null>(null)

  // 첨부(PDF만 목록 관리, 이미지는 본문에 직접 삽입)
  const [attachments, setAttachments] = useState<{ name: string; url: string; type: "pdf" | "file" }[]>([])
  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const pdfInputRef = useRef<HTMLInputElement | null>(null)

  // 커스텀 alert
  const [alertMsg, setAlertMsg] = useState("")
  const [afterCloseRoute, setAfterCloseRoute] = useState<string | null>(null)
  const showAlert = (m: string, redirectTo?: string) => {
    setAlertMsg(m)
    setAfterCloseRoute(redirectTo || null)
  }
  const onCloseAlert = () => {
    const to = afterCloseRoute
    setAlertMsg("")
    setAfterCloseRoute(null)
    if (to) router.replace(to)
  }

  const me = usernameFromLS()
  const isAdmin = roleFromLS() === "ADMIN"

  // placeholder 스타일
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

  // 초기 데이터 로드
  useEffect(() => {
    if (!id) return
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${GW}/posts/${id}`, { headers: authHeaders(), cache: "no-store" })
      if (!res.ok) throw new Error(`GET /posts/${id} -> ${res.status}`)
      const data: Post = await res.json()

      // 권한 체크(작성자 또는 관리자)
      const author = (data.author || "").toLowerCase()
      const meLower = (me || "").toLowerCase()
      if (!isAdmin && author !== meLower) {
        showAlert("수정 권한이 없습니다.", `/community/post/${id}`)
        return
      }

      setTitle(data.title || "")
      if (editorRef.current) editorRef.current.innerHTML = data.content || ""
      setAttachments(Array.isArray(data.attachments) ? data.attachments : [])
    } catch (e) {
      console.error(e)
      showAlert("게시글을 불러오지 못했습니다.", `/community/post/${id}`)
    } finally {
      setLoading(false)
    }
  }

  /* =========================
   * 업로드: WSAS/RSAS + Azure PUT
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
        insertHtmlAtCaret(
          `<img src="${publicUrl}" alt="${f.name}" style="max-width:100%;height:auto;display:block;margin:0.5rem 0;" />`
        )
      } catch {
        /* 이미 showAlert 처리됨 */
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
    } catch {
      /* 이미 showAlert 처리됨 */
    }
  }

  const removeAttachment = (idx: number) =>
    setAttachments((prev) => prev.filter((_, i) => i !== idx))

  /* =========================
   * 저장
   * ========================= */
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) return

    const el = editorRef.current
    const contentHtml = (el?.innerHTML || "").trim()

    const MAX_CONTENT_LENGTH = 10000
    if (!title.trim() || !contentHtml) {
      showAlert("제목과 내용을 입력해 주세요.")
      return
    }
    if (contentHtml.length > MAX_CONTENT_LENGTH) {
      showAlert(`본문이 너무 깁니다. ${MAX_CONTENT_LENGTH.toLocaleString()}자 이하로 작성해 주세요.`)
      return
    }

    setSaving(true)
    try {
      const payload = {
        author: usernameFromLS() || "unknown",
        title: title.trim(),
        content: contentHtml,
        attachments, // 서버가 지원하면 함께 저장
      }
      const res = await fetch(`${GW}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`PUT /posts/${id} -> ${res.status}`)
      showAlert("저장되었습니다.", `/community/post/${id}`)
    } catch (e) {
      console.error(e)
      showAlert("저장 실패")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/community/post/${id}`} prefetch={false}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              뒤로
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">글 수정</h1>
            <p className="text-gray-600">게시글 내용을 수정하세요</p>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <Card>
            <CardHeader>
              <CardTitle>게시글 수정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 제목 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">제목</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  required
                  disabled={loading}
                />
              </div>

              {/* 본문 (contentEditable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
                <div
                  ref={editorRef}
                  contentEditable
                  className="min-h-[320px] p-3 border rounded-md bg-white leading-7 outline-none"
                  data-placeholder="내용을 입력하세요..."
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                />
                {/* 접근성용 숨김 textarea (폼 구조 유지) */}
                <Textarea className="sr-only" aria-hidden value="" readOnly />
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
                    <p className="text-sm text-gray-600 mb-2">
                      PNG 또는 JPG 이미지를 업로드하면 본문에 <b>직접</b> 삽입됩니다.
                    </p>
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
                  <input
                    ref={pdfInputRef}
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={onPickPdf}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      PDF는 본문에 삽입되지 않고 아래 첨부 목록에만 추가됩니다.
                    </p>
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
            </CardContent>
          </Card>

          {/* 버튼 */}
          <div className="flex justify-end gap-4 mt-6">
            <Link href={`/community/post/${id}`} prefetch={false}>
              <Button type="button" variant="outline">취소</Button>
            </Link>
            <Button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white"
              disabled={saving || loading}
            >
              {saving ? "저장 중…" : "저장"}
            </Button>
          </div>
        </form>
      </div>

      {/* 🔔 커스텀 Alert 모달 */}
      <AlertModal message={alertMsg} onClose={onCloseAlert} />
    </div>
  )
}
