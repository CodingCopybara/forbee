// /app/community/[tab]/page.tsx
import React, { use } from "react"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export default function CommunityTabIndex({
  params,
}: {
  params: Promise<{ tab: "free" | "notice" | "qna" }>
}) {
  const { tab } = use(params)
  const safe = (["free", "notice", "qna"] as const).includes(tab) ? tab : "free"
  redirect(`/community/${safe}/1`)
}
