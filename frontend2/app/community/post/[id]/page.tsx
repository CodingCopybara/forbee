"use client"

import React, { use, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Eye, MessageCircle, Share2, MoreVertical } from "lucide-react"
import { marked } from "marked"
import DOMPurify from "dompurify"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")

// ✅ 세부 카테고리 라벨 매핑
const categoryLabelMap: Record<string, string> = {
  general: "일반",
  harvest: "수확후기",
  question: "질문",
  info: "정보공유",
  review: "후기",
  announcement: "공지사항",
  update: "업데이트",
  event: "이벤트",
  disease: "질병진단",
  management: "관리문의",
  "ai-service": "AI서비스",
  equipment: "장비문의",
  location: "위치선정",
}

type Post = {
  id: string | number
  title: string
  content: string
  author: string
  createdAt?: string
  views?: number
  likes?: number
  comments?: number
  category?: "free" | "notice" | "qna" | string // 대분류(서버 기존)
  subCategory?: string                           // ✅ 세부 카테고리
  tags?: string[]                                // ✅ 태그
}

type Comment = {
  id: string | number
  author: string
  content: string
  createdAt?: string
  likes?: number
}

const roleFromLS = () => (typeof window !== "undefined" ? (localStorage.getItem("role") || "").toUpperCase() : "")
const tokenFromLS = () => (typeof window !== "undefined" ? localStorage.getItem("accessToken") || "" : "")
const usernameFromLS = () => {
  const u = (typeof window !== "undefined" ? localStorage.getItem("username") : "") || ""
  return u.includes("@") ? u.split("@")[0] : u
}
const authHeaders = () => {
  const role = roleFromLS()
  const token = tokenFromLS()
  return { Role: role, ...(token ? { Authorization: `Bearer ${token}` } : {}) }
}
const abs = (u?: string) => (!u ? u : /^https?:\/\//i.test(u) ? u : `${GW}${u.startsWith("/") ? u : `/${u}`}`)

// 작성자 마스킹
function maskId(value?: string): string {
  const v = (value || "").trim()
  if (!v) return "익명"
  const at = v.indexOf("@")
  if (at > -1) {
    const local = v.slice(0, at)
    const domain = v.slice(at)
    if (local.length <= 3) return local + domain
    return local.slice(0, 3) + "*".repeat(Math.max(0, local.length - 3)) + domain
  }
  if (v.length <= 3) return v
  return v.slice(0, 3) + "*".repeat(v.length - 3)
}

/* =========================
 * 주소가 노출되지 않는 커스텀 알림/확인 모달
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

function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: {
  message: string
  onConfirm: () => void
  onCancel: () => void
}) {
  if (!message) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl border">
        <div className="px-5 py-4 border-b">
          <h3 className="text-base font-semibold">확인</h3>
        </div>
        <div className="px-5 py-6 text-gray-800 whitespace-pre-wrap break-words">{message}</div>
        <div className="px-5 py-4 border-t flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>취소</Button>
          <Button onClick={onConfirm} className="bg-amber-500 hover:bg-amber-600 text-white">확인</Button>
        </div>
      </div>
    </div>
  )
}

export default function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter()
  const { id } = use(params)

  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")

  // 🔔 커스텀 알림/확인 상태
  const [alertMsg, setAlertMsg] = useState("")
  const showAlert = (msg: string) => setAlertMsg(msg)
  const [confirmMsg, setConfirmMsg] = useState("")
  const askConfirm = (msg: string, onYes: () => void) => {
    setConfirmMsg(msg)
    // 확인 버튼에서 onYes 호출 후 모달 닫기
    confirmYesRef.current = () => { setConfirmMsg(""); onYes() }
  }
  const confirmYesRef = React.useRef<() => void>(() => {})

  const role = roleFromLS()
  const loggedIn = !!tokenFromLS()

  const QNA_ALLOWED = new Set(["MEMBER", "VETERINARIAN", "ADMIN"])
  const NOTICE_ALLOWED = new Set(["USER", "MEMBER", "VETERINARIAN", "ADMIN"])

  const titleLocked = React.useMemo(() => {
    if (!post) return false
    if (post.category === "qna") return !QNA_ALLOWED.has(role)
    if (post.category === "notice") return !(loggedIn && NOTICE_ALLOWED.has(role))
    return false
  }, [post, role, loggedIn])

  const contentLocked = titleLocked
  const commentsLocked = titleLocked

  const canDelete = role === "ADMIN"

  const canComment = React.useMemo(() => {
    if (!post) return false
    if (post.category === "free") return ["USER", "MEMBER", "VETERINARIAN", "ADMIN"].includes(role)
    if (post.category === "qna") return role === "VETERINARIAN"
    if (post.category === "notice") return role === "ADMIN"
    return false
  }, [post, role])

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function load() {
    try {
      const res = await fetch(`${GW}/posts/${id}`, { headers: authHeaders(), cache: "no-store" })
      if (!res.ok) throw new Error(`GET /posts/${id} -> ${res.status}`)
      const data = await res.json()
      setPost(data)

      // 조회수 증가 (실패 무시)
      fetch(`${GW}/posts/${id}/view`, { method: "POST", headers: authHeaders() }).catch(() => {})

      const c = await fetch(`${GW}/comments/post/${id}`, { headers: authHeaders(), cache: "no-store" })
      if (c.ok) setComments(await c.json())
    } catch (e) {
      console.error(e)
      showAlert("게시글을 불러오지 못했습니다.")
    }
  }

  // 공유하기: 현재 페이지 URL 복사 (모달 알림 사용)
  const handleShare = async () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : ""
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
      } else {
        const ta = document.createElement("textarea")
        ta.value = url
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
      }
      showAlert("링크가 클립보드에 복사되었습니다.")
    } catch {
      showAlert("복사에 실패했습니다. 브라우저 권한을 확인해주세요.")
    }
  }

  marked.setOptions({ breaks: true })
  const renderedHtml = useMemo(() => {
    const raw = post?.content ?? ""
    const parsed = marked.parse(raw || "", { async: false }) as string
    const fixed = parsed.replace(/(src|href)="(\/[^"]*)"/g, (_m, attr, path) => `${attr}="${abs(path)}"`)
    return { __html: DOMPurify.sanitize(fixed) }
  }, [post?.content])

  const formattedDate = (raw?: string) => (raw ? new Date(raw).toLocaleString("ko-KR") : "")

  const handleDelete = async () => {
    if (!canDelete) return
    askConfirm("정말 삭제하시겠습니까?", async () => {
      try {
        const res = await fetch(`${GW}/posts/${id}`, { method: "DELETE", headers: authHeaders() })
        if (!res.ok) throw new Error(`DELETE /posts/${id} -> ${res.status}`)
        showAlert("삭제되었습니다.")
        const dest = `/community/${post?.category || "free"}/1`
        setTimeout(() => router.replace(dest), 250)
      } catch (e) {
        console.error(e)
        showAlert("삭제에 실패했습니다.")
      }
    })
  }

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !canComment) return
    try {
      const res = await fetch(`${GW}/comments/write`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ postId: id, content: newComment, author: usernameFromLS() || "익명" }),
      })
      if (!res.ok) throw new Error(`POST /comments/write -> ${res.status}`)
      setNewComment("")
      load()
    } catch (e) {
      console.error(e)
      showAlert("댓글 작성에 실패했습니다.")
    }
  }

  const subCategoryBadge = (sc?: string) => {
    if (!sc) return null
    const label = categoryLabelMap[sc] || sc
    return <Badge variant="outline" className="border-amber-200 text-amber-600">{label}</Badge>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/community/${post?.category || "free"}/1`} prefetch={false}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              목록으로
            </Button>
          </Link>
          <div className="ml-auto flex gap-2">
            {canDelete && (
              <Button variant="destructive" size="sm" onClick={handleDelete}>
                삭제하기
              </Button>
            )}
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              {/* ✅ 카테고리 & 태그 영역 */}
              <div className="flex items-center gap-2 flex-wrap">
                {subCategoryBadge(post?.subCategory)}
                {Array.isArray(post?.tags) &&
                  post!.tags!.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">#{tag}</Badge>
                  ))}
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-4">
              {titleLocked ? "잠긴 글입니다." : post?.title || ""}
            </h1>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={"/placeholder.svg"} />
                    <AvatarFallback>{(post?.author || "익명")[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{maskId(post?.author)}</p>
                    <p className="text-xs text-gray-500">{formattedDate(post?.createdAt)}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post?.views ?? 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {/* ✅ 실제 로드된 댓글 수로 표시 */}
                  <span>{comments.length}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {!contentLocked ? (
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed" dangerouslySetInnerHTML={renderedHtml} />
              ) : (
                <div style={{ minHeight: 80 }} />
              )}
            </div>

            <div className="flex items-center justify-end mt-8 pt-6 border-t">
              {/* ✅ 좋아요/북마크 제거, 공유만 남김 */}
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">댓글 {commentsLocked ? 0 : comments.length}개</h3>
          </CardHeader>
          <CardContent>
            {canComment && !commentsLocked ? (
              <form onSubmit={submitComment} className="mb-6">
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 작성해주세요..."
                  rows={3}
                  className="mb-3"
                />
                <div className="flex justify-end">
                  <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
                    댓글 작성
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mb-6 text-sm text-gray-500">댓글 권한이 없습니다.</div>
            )}

            <Separator className="mb-6" />

            {commentsLocked ? (
              <div className="text-sm text-gray-500">
                {comments.length > 0 ? "잠긴 댓글입니다." : "댓글이 없습니다."}
              </div>
            ) : (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={"/placeholder.svg"} />
                        <AvatarFallback>{(comment.author || "익명")[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{maskId(comment.author || "익명")}</span>
                      <span className="text-xs text-gray-500">
                        {comment.createdAt ? new Date(comment.createdAt).toLocaleString("ko-KR") : ""}
                      </span>
                    </div>
                    <p className="text-gray-800 text-sm">{comment.content}</p>
                  </div>
                ))}
                {comments.length === 0 && <div className="text-sm text-gray-500">댓글이 없습니다.</div>}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 🔔 커스텀 알림/확인 모달 */}
      <AlertModal message={alertMsg} onClose={() => setAlertMsg("")} />
      <ConfirmModal
        message={confirmMsg}
        onCancel={() => setConfirmMsg("")}
        onConfirm={() => confirmYesRef.current()}
      />
    </div>
  )
}
