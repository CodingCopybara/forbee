"use client"

// /app/community/post/[id]/edit/page.tsx
import React, { use, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

const GW = (process.env.NEXT_PUBLIC_GW_URL || "").replace(/\/+$/, "")

type Post = { id: string | number; title: string; content: string; author: string; category?: "free" | "notice" | "qna" }

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

export default function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState<{ title: string; content: string; category?: "free" | "notice" | "qna"; author?: string }>({
    title: "",
    content: "",
  })
  const editorRef = useRef<HTMLTextAreaElement | null>(null)

  const me = usernameFromLS()
  const isAdmin = roleFromLS() === "ADMIN"

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function load() {
    setLoading(true)
    try {
      const res = await fetch(`${GW}/posts/${id}`, { headers: authHeaders(), cache: "no-store" })
      if (!res.ok) throw new Error(`GET /posts/${id} -> ${res.status}`)
      const data: Post = await res.json()

      const author = (data.author || "").toLowerCase()
      const meLower = (me || "").toLowerCase()
      if (!isAdmin && author !== meLower) {
        alert("수정 권한이 없습니다.")
        router.replace(`/community/post/${id}`)
        return
      }

      setForm({ title: data.title || "", content: data.content || "", category: data.category as any, author: data.author })
    } catch (e) {
      console.error(e)
      alert("게시글을 불러오지 못했습니다.")
      router.replace(`/community/post/${id}`)
    } finally {
      setLoading(false)
    }
  }

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      const payload = { author: me || "unknown", title: form.title, content: form.content }
      const res = await fetch(`${GW}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`PUT /posts/${id} -> ${res.status}`)
      alert("저장되었습니다.")
      router.replace(`/community/post/${id}`)
    } catch (e) {
      console.error(e)
      alert("저장 실패")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/community/post/${id}`} prefetch={false}>
            <Button variant="outline" size="sm">← 뒤로</Button>
          </Link>
          <h2 className="text-2xl font-bold">글 수정</h2>
        </div>

        <Card>
          <CardHeader><CardTitle>내용 편집</CardTitle></CardHeader>
          <CardContent>
            {loading ? (
              <div>불러오는 중…</div>
            ) : (
              <form onSubmit={save} className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium">제목</span>
                  <Input value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} required />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">본문</span>
                  <Textarea
                    ref={editorRef}
                    value={form.content}
                    onChange={(e) => setForm((s) => ({ ...s, content: e.target.value }))}
                    rows={16}
                    required
                  />
                </label>

                <div className="flex gap-2 justify-end">
                  <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white" disabled={saving}>
                    {saving ? "저장 중…" : "저장"}
                  </Button>
                  <Link href={`/community/post/${id}`} prefetch={false}>
                    <Button type="button" variant="outline">취소</Button>
                  </Link>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
