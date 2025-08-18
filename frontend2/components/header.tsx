"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Settings, LogOut, UserCog, LogIn } from "lucide-react"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken")
      const role = localStorage.getItem("role")
      setIsLoggedIn(!!token)
      setIsAdmin(role === "ADMIN")
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("role")
    localStorage.removeItem("username")
    localStorage.removeItem("name")
    localStorage.removeItem("userIdentifier")
    localStorage.removeItem("phone")
    setIsLoggedIn(false)
    setIsAdmin(false)
    router.push("/")
  }

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-[2000]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-amber-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Forbee AI</h1>
            <p className="text-sm text-gray-600">양봉농협 협업 서비스</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/pest-detection" className="text-gray-600 hover:text-amber-600 transition-colors">
            진단 서비스
          </Link>
          <Link href="/area-analysis" className="text-gray-600 hover:text-amber-600 transition-colors">
            양봉지 분석
          </Link>
          <Link href="/bloom-prediction" className="text-gray-600 hover:text-amber-600 transition-colors">
            개화 예측
          </Link>
          <Link href="/nectar-support" className="text-gray-600 hover:text-amber-600 transition-colors">
            밀원수 지원
          </Link>
          <Link href="/community" className="text-gray-600 hover:text-amber-600 transition-colors">
            커뮤니티
          </Link>
          <Link href="/mypage" className="text-gray-600 hover:text-amber-600 transition-colors">
            마이페이지
          </Link>
          {isAdmin && (
            <Link href="/admin" className="text-gray-600 hover:text-amber-600 transition-colors">
              관리자
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link href="/admin">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    <UserCog className="w-4 h-4 mr-2" />
                    관리자
                  </Button>
                </Link>
              )}
              {/* <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                설정
              </Button> */}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                로그아웃
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <LogIn className="w-4 h-4 mr-2" />
                로그인
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
