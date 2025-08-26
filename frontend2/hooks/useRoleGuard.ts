"use client"

import { useEffect, useState } from "react"
// @ts-ignore
import { useRouter, usePathname } from "next/navigation"

type Role = "GUEST" | "USER" | "MEMBER" | "ADMIN"
const rank = { GUEST: 0, USER: 1, MEMBER: 2, ADMIN: 3 } as const

function readAuth() {
  if (typeof window === "undefined") {
    return { token: null as string | null, role: "GUEST" as Role }
  }
  const token = localStorage.getItem("accessToken")
  const rawRole = (localStorage.getItem("role") as Role | null) ?? "GUEST"
  const role: Role = ["USER", "MEMBER", "ADMIN"].includes(rawRole) ? (rawRole as Role) : "GUEST"
  return { token, role }
}

/**
 * MEMBER/ADMIN만 접근 허용하고 싶다면:
 *   useRoleGuard("MEMBER", { guestRedirectTo: "/login", userRedirectTo: "/membership/apply" })
 */
export function useRoleGuard(
  minRole: "MEMBER" | "ADMIN" = "MEMBER",
  opts?: {
    guestRedirectTo?: string   // 비로그인 리다이렉트
    userRedirectTo?: string    // USER 권한(조합원 미신청) 리다이렉트
    adminDenyTo?: string       // ADMIN 요구 시 미만 권한 리다이렉트 (옵션)
    redirect?: "auto" | "manual" // 확인 후 이동
  }
) {
  const router = useRouter()
  const pathname = usePathname()
  const {
    guestRedirectTo = "/login",
    userRedirectTo = "/membership-application",
    adminDenyTo = "/403",
    redirect = "auto",
  } = opts || {}

  const [{ token, role }, setAuth] = useState(readAuth)
  const [ready, setReady] = useState(false)

  // 수동 리다이렉트용 대기 상태
  const [pendingRedirect, setPendingRedirect] = useState<{
    target: string
    reason: "GUEST" | "USER" | "FORBIDDEN"
  } | null>(null)

  useEffect(() => {
    const check = () => {
      const next = readAuth()
      setAuth(next)

      // 최소 권한 충족 여부
      const allowed = !!next.token && rank[next.role] >= rank[minRole]
      if (allowed) {
        setReady(true)
        return
      }

      // 허용 안 될 때
      let target = ""
      let reason: "GUEST" | "USER" | "FORBIDDEN" = "FORBIDDEN"

      if (!next.token || next.role === "GUEST") {
        target = `${guestRedirectTo}?callbackUrl=${encodeURIComponent(pathname)}`
        reason = "GUEST"
      } else if (minRole === "MEMBER" && next.role === "USER") {
        target = `${userRedirectTo}?callbackUrl=${encodeURIComponent(pathname)}`
        reason = "USER"
      } else {
        target = adminDenyTo
        reason = "FORBIDDEN"
      }

      if (redirect === "auto") {
        router.replace(target)
      } else {
        setPendingRedirect({ target, reason })
      }
    }

    check()

    // 탭/창 동기화 + 포커스 시 재검
    const onStorage = (e: StorageEvent) => {
      if (e.key === "accessToken" || e.key === "role") check()
    }
    const onFocus = () => check()
    window.addEventListener("storage", onStorage)
    window.addEventListener("focus", onFocus)
    return () => {
      window.removeEventListener("storage", onStorage)
      window.removeEventListener("focus", onFocus)
    }
  }, [router, pathname, minRole, guestRedirectTo, userRedirectTo, adminDenyTo, redirect])

  return {
    ready,                 // true여야 실제 페이지 렌더
    role,
    isLoggedIn: !!token,
    isMemberPlus: rank[role] >= rank.MEMBER,
    isAdmin: role === "ADMIN",
    pendingRedirect,       // manual 모드일 때 모달로 처리
  }
}