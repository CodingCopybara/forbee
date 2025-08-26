// app/_components/RequireMemberWithAlert.tsx
"use client"
import { useEffect, useMemo, useState } from "react"
//@ts-ignore
import { useRouter } from "next/navigation"
import { useRoleGuard } from "@/hooks/useRoleGuard"
import { Button } from "./ui/button"


function AlertModal({ message, onClose }: { message: string; onClose: () => void }) {
  if (!message) return null
  const router = useRouter()
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl border">
        <div className="px-5 py-4 border-b">
          <h3 className="text-base font-semibold">알림</h3>
        </div>
        <div className="px-5 py-6 text-gray-800 whitespace-pre-wrap break-words">{message}</div>
        <div className="px-5 py-4 border-t flex justify-end gap-2">
          <Button onClick={onClose} className="bg-amber-500 hover:bg-amber-600 text-white">확인</Button>
          <Button onClick={() => router.push("/")} className="bg-amber-500 hover:bg-amber-600 text-white">취소</Button>
        </div>
      </div>
    </div>
  )
}

export function RequireMemberWithAlert({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { ready, pendingRedirect } = useRoleGuard("MEMBER", {
    guestRedirectTo: "/login",
    userRedirectTo: "/membership-application",
    redirect: "manual",
  })
  const [message, setMessage] = useState("")
  const msg = useMemo(() => {
    if (!pendingRedirect) return ""
    return pendingRedirect.reason === "GUEST"
      ? "로그인이 필요한 서비스입니다.\n로그인 페이지로 이동할까요?"
      : "조합원 인증이 필요한 서비스입니다.\n조합원 신청 페이지로 이동할까요?"
  }, [pendingRedirect])
  useEffect(() => setMessage(msg), [msg])

  if (pendingRedirect) {
    return (
      <AlertModal
        message={message}
        onClose={() => router.replace(pendingRedirect.target)}
      />
    )
  }
  if (!ready) return null
  return <>{children}</>
}
