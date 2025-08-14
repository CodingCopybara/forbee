"use client"

// /app/community/[tab]/[page]/page.tsx
import React, { use, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  Eye,
  Pin,
  AlertCircle,
  HelpCircle,
  PenTool,
  Grid3X3,
  List,
  Search,
  X,
} from "lucide-react"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

type Tab = "free" | "notice" | "qna"

type PostRow = {
  id: number | string
  title: string
  author: string
  createdAt?: string
  views?: number
  likes?: number
  comments?: number
  category?: string
  isPinned?: boolean
  isImportant?: boolean
  status?: string
  avatar?: string
  content?: string
}

const tabs = [
  { id: "free", label: "자유게시판", icon: MessageCircle },
  { id: "notice", label: "공지사항", icon: AlertCircle },
  { id: "qna", label: "Q&A", icon: HelpCircle },
] as const

const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")
const PAGE_SIZE = 10 as const

const roleFromLS = () =>
  (typeof window !== "undefined" ? (localStorage.getItem("role") || "") : "").toUpperCase()
const tokenFromLS = () => (typeof window !== "undefined" ? localStorage.getItem("accessToken") || "" : "")
const loggedIn = () => !!tokenFromLS()
const authHeaders = () => {
  const role = roleFromLS()
  const token = tokenFromLS()
  return { Role: role, ...(token ? { Authorization: `Bearer ${token}` } : {}) }
}

// ✅ 작성자 마스킹: 앞 3글자만 노출, 나머지는 *로 대체
// 이메일이면 로컬파트( @ 앞 )만 마스킹
function maskId(value?: string): string {
  const v = (value || "").trim()
  if (!v) return "익명"
  const at = v.indexOf("@")
  if (at > -1) {
    const local = v.slice(0, at)
    const domain = v.slice(at)
    if (local.length <= 3) return local + domain
    return local.slice(0, 3) + "*".repeat(local.length - 3) + domain
  }
  if (v.length <= 3) return v
  return v.slice(0, 3) + "*".repeat(v.length - 3)
}

function pick<T>(...vals: any[]): T | undefined {
  return vals.find((v) => v !== undefined && v !== null)
}

export default function CommunityPage({
  params,
}: {
  params: Promise<{ tab: Tab; page: string }>
}) {
  const router = useRouter()
  const { tab, page } = use(params)
  const CURRENT_TAB: Tab = (["free", "notice", "qna"].includes(tab) ? tab : "free") as Tab
  const CURRENT_PAGE = Math.max(1, parseInt(page || "1", 10))

  const [activeTab, setActiveTab] = useState<Tab>(CURRENT_TAB)
  const [allData, setAllData] = useState<Record<Tab, PostRow[]>>({ free: [], notice: [], qna: [] })
  const [loading, setLoading] = useState(false)

  // 검색/보기 상태
  const [viewMode, setViewMode] = useState<"table" | "card">("table")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState<"all" | "title" | "content">("all")

  // 권한
  const role = roleFromLS()
  const QNA_ALLOWED = new Set(["MEMBER", "VETERINARIAN", "ADMIN"])
  const NOTICE_ALLOWED = new Set(["USER", "MEMBER", "VETERINARIAN", "ADMIN"])

  useEffect(() => {
    setActiveTab(CURRENT_TAB)
  }, [CURRENT_TAB])

  // 데이터 로드 (전체 받아 최신순 정렬)
  async function load(category: Tab) {
    if (!GW) return
    setLoading(true)
    try {
      const res = await fetch(
        `${GW}/posts?category=${category}&sort=createdAt,desc&sort=id,desc`,
        { headers: authHeaders(), cache: "no-store" },
      )
      if (!res.ok) throw new Error(`GET /posts?category=${category} -> ${res.status}`)
      const json = await res.json()

      const items: any[] = Array.isArray(json)
        ? json
        : Array.isArray(json?.content)
        ? json.content
        : Array.isArray(json?.data)
        ? json.data
        : []

      const mapped: PostRow[] = items.map((p) => ({
        id: pick(p.id, p.postId, p.seq, p.uid) ?? String(Math.random()),
        title: String(pick<string>(p.title, p.subject, p.name, p.heading) ?? ""),
        author: pick<string>(p.author, p.username, p.writer, p.createdBy, "익명") ?? "익명",
        createdAt: pick<string>(p.createdAt, p.created_date, p.created, p.regDate, p.date),
        views: pick<number>(p.views, p.viewCount) ?? 0,
        likes: pick<number>(p.likes, p.likeCount) ?? 0,
        comments: pick<number>(p.comments, p.commentCount, p.replyCount) ?? 0,
        category: category === "free" ? "자유" : category === "notice" ? "공지" : "QnA",
        isPinned: !!p.isPinned,
        isImportant: !!p.isImportant,
        status: p.status,
        avatar: p.avatar,
        content: pick<string>(p.content, p.body, p.description, p.text) ?? "",
      }))

      mapped.sort((a, b) => {
        const ad = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const bd = b.createdAt ? new Date(b.createdAt).getTime() : 0
        if (bd !== ad) return bd - ad
        const ai = Number(a.id),
          bi = Number(b.id)
        if (!Number.isNaN(ai) && !Number.isNaN(bi)) return bi - ai
        return String(b.id).localeCompare(String(a.id))
      })

      setAllData((prev) => ({ ...prev, [category]: mapped }))
    } catch (e) {
      console.error(e)
      setAllData((prev) => ({ ...prev, [category]: [] }))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load(activeTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  // 권한에 따른 목록 제목 잠금 여부
  const isRowLocked = (tabNow: Tab) => {
    if (tabNow === "qna") return !QNA_ALLOWED.has(role)
    if (tabNow === "notice") return !(loggedIn() && NOTICE_ALLOWED.has(role))
    return false
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "답변완료":
        return "bg-green-100 text-green-800"
      case "답변대기":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // 검색 필터
  const filtered = useMemo(() => {
    const base = allData[activeTab] || []
    const q = searchQuery.trim().toLowerCase()
    if (!q) return base
    return base.filter((p) => {
      const t = p.title?.toLowerCase() || ""
      const c = p.content?.toLowerCase() || ""
      if (searchType === "title") return t.includes(q)
      if (searchType === "content") return c.includes(q)
      return t.includes(q) || c.includes(q)
    })
  }, [allData, activeTab, searchQuery, searchType])

  const totalPosts = filtered.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE))
  const start = (CURRENT_PAGE - 1) * PAGE_SIZE
  const paged = filtered.slice(start, start + PAGE_SIZE)

  // 페이지 버튼 (최대 5개 노출)
  const pageButtons = useMemo(() => {
    const max = 5
    let first = Math.max(1, CURRENT_PAGE - 2)
    let last = Math.min(totalPages, first + max - 1)
    first = Math.max(1, last - max + 1)
    return Array.from({ length: last - first + 1 }, (_, i) => first + i)
  }, [CURRENT_PAGE, totalPages])

  const canWrite =
    activeTab === "free"
      ? ["USER", "MEMBER", "VETERINARIAN", "ADMIN"].includes(role)
      : activeTab === "qna"
      ? role === "MEMBER"
      : role === "ADMIN"

  const gotoTab = (t: Tab) => {
    setSearchQuery("")
    router.push(`/community/${t}/1`)
  }

  const gotoPage = (n: number) => router.push(`/community/${activeTab}/${n}`)

  const handleSearch = () => {
    if (CURRENT_PAGE !== 1) router.push(`/community/${activeTab}/1`)
  }

  const handleSearchReset = () => {
    setSearchQuery("")
    if (CURRENT_PAGE !== 1) router.push(`/community/${activeTab}/1`)
  }

  const renderTableView = () => {
    const locked = isRowLocked(activeTab)
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                  번호
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">댓글</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paged.map((post, idx) => {
                const number = totalPosts - start - idx
                const title = locked ? "🔒 잠긴 글입니다." : post.title
                const maskedAuthor = maskId(post.author)
                return (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-500">{number}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {post.isPinned && <Pin className="h-3 w-3 text-amber-500 flex-shrink-0" />}
                        {post.isImportant && (
                          <Badge variant="destructive" className="text-xs px-1 py-0">
                            중요
                          </Badge>
                        )}
                        {post.status && (
                          <Badge className={`text-xs px-1 py-0 ${getStatusColor(post.status)}`}>{post.status}</Badge>
                        )}
                        {post.category && (
                          <Badge variant="outline" className="text-xs px-1 py-0 text-amber-600 border-amber-200">
                            {post.category}
                          </Badge>
                        )}
                      </div>
                      <Link href={`/community/post/${post.id}`} className="hover:text-amber-600 block mt-1">
                        <span className="font-medium text-sm line-clamp-1">{title}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs">
                            {String(post.author || "익명")[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-700">{maskedAuthor}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {post.createdAt ? new Date(post.createdAt).toISOString().slice(0, 10) : ""}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>{post.views ?? 0}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments ?? 0}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
              {!loading && paged.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-sm text-gray-500" colSpan={6}>
                    게시글이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderCardView = () => {
    const locked = isRowLocked(activeTab)
    return (
      <div className="space-y-4">
        {paged.map((post) => {
          const title = locked ? "🔒 잠긴 글입니다." : post.title
          const maskedAuthor = maskId(post.author)
          return (
            <div key={post.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {post.isPinned && <Pin className="h-4 w-4 text-amber-500" />}
                    {post.isImportant && (
                      <Badge variant="destructive" className="text-xs">
                        중요
                      </Badge>
                    )}
                    {post.status && <Badge className={`text-xs ${getStatusColor(post.status)}`}>{post.status}</Badge>}
                    {post.category && (
                      <Badge variant="outline" className="text-xs text-amber-600 border-amber-200">
                        {post.category}
                      </Badge>
                    )}
                  </div>
                  <Link href={`/community/post/${post.id}`} className="hover:text-amber-600">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">
                          {String(post.author || "익명")[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span>{maskedAuthor}</span>
                    </div>
                    <span>{post.createdAt ? new Date(post.createdAt).toISOString().slice(0, 10) : ""}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views ?? 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments ?? 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {!loading && paged.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-10 text-center text-sm text-gray-500">
            게시글이 없습니다.
          </div>
        )}
      </div>
    )
  }

  const prevDisabled = CURRENT_PAGE === 1
  const nextDisabled = CURRENT_PAGE === totalPages

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 상단: 탭 + 보기모드 + 글쓰기 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((t) => {
              const Icon = t.icon
              const active = activeTab === (t.id as Tab)
              return (
                <button
                  key={t.id}
                  onClick={() => gotoTab(t.id as Tab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    active ? "bg-amber-500 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* 보기 모드 */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "table" ? "bg-amber-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                title="테이블 보기"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "card" ? "bg-amber-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                title="카드 보기"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
            </div>

            {canWrite && (
              <Link href={`/community/write?board=${activeTab}`} prefetch={false}>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  <PenTool className="h-4 w-4 mr-2" />
                  글쓰기
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* 검색 박스 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center gap-3">
            <Select value={searchType} onValueChange={(v) => setSearchType(v as "all" | "title" | "content")}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">제목+내용</SelectItem>
                <SelectItem value="title">제목</SelectItem>
                <SelectItem value="content">내용</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 flex gap-2">
              <Input
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} className="bg-amber-500 hover:bg-amber-600">
                <Search className="h-4 w-4 mr-2" />
                검색
              </Button>
              <Button variant="outline" onClick={handleSearchReset}>
                <X className="h-4 w-4 mr-2" />
                취소
              </Button>
            </div>
          </div>
        </div>

        {/* 개수/페이지 요약 */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">
            전체 <span className="font-semibold text-amber-600">{totalPosts}</span>개의 게시물
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-amber-600">{CURRENT_PAGE}</span> / {totalPages} 페이지
          </div>
        </div>

        {/* 목록 */}
        {loading ? (
          <div className="text-sm text-gray-600">불러오는 중…</div>
        ) : viewMode === "table" ? (
          renderTableView()
        ) : (
          renderCardView()
        )}

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => gotoPage(Math.max(1, CURRENT_PAGE - 1))}
                disabled={prevDisabled}
              >
                이전
              </Button>

              {pageButtons.map((n) => (
                <Button
                  key={n}
                  variant="outline"
                  size="sm"
                  onClick={() => gotoPage(n)}
                  className={CURRENT_PAGE === n ? "bg-amber-500 text-white" : ""}
                >
                  {n}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => gotoPage(Math.min(totalPages, CURRENT_PAGE + 1))}
                disabled={nextDisabled}
              >
                다음
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
