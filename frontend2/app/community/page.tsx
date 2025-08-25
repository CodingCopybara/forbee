// /app/community/page.tsx
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export default function CommunityIndex() {
  redirect("/community/free/1")
}
