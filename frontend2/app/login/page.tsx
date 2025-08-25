"use client"

import type React from "react"
import { Hexagon } from "lucide-react"
import { useState } from "react"
import { jwtDecode } from "jwt-decode"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import PrivacyPolicyModal from "@/components/privacy-policy-modal"
import TermsOfServiceModal from "@/components/terms-of-service-modal"
import { register } from "module"

interface DecodedToken {
  userIdentifier: string;
  username: string;
}

// ✅ 실패 시 항상 보여줄 공통 문구
const GENERIC_BAD_CREDENTIALS = "아이디 또는 비밀번호가 올바르지 않습니다.";

/* =========================
 * 커스텀 알림 모달 (주소/URL 미노출)
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

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")
  const [isLoading, setIsLoading] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  // ✅ 커스텀 알림 상태 (기존 로직은 유지, alert만 치환)
  const [alertMsg, setAlertMsg] = useState("")
  const showAlert = (msg: string) => setAlertMsg(msg)

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: true,
  })

  const [registerForm, setRegisterForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 4 && password.length <= 12
  }

  const handleRegisterFormChange = (field: string, value: string) => {
    setRegisterForm({ ...registerForm, [field]: value })

    // 실시간 검증 (원본 로직 유지)
    const newErrors = { ...validationErrors }

    if (field === "email") {
      if (value && !validateEmail(value)) {
        newErrors.email = "올바른 이메일 형식을 입력해주세요"
      } else {
        newErrors.email = ""
      }
    }

    if (field === "password") {
      if (value && !validatePassword(value)) {
        newErrors.password = "비밀번호는 4-12자 사이여야 합니다"
      } else {
        newErrors.password = ""
      }

      if (registerForm.confirmPassword && value !== registerForm.confirmPassword) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다"
      } else if (registerForm.confirmPassword && value === registerForm.confirmPassword) {
        newErrors.confirmPassword = ""
      }
    }

    if (field === "confirmPassword") {
      if (value && value !== registerForm.password) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다"
      } else {
        newErrors.confirmPassword = ""
      }
    }

    setValidationErrors(newErrors)
  }

  /* =========================
   * 오류 메시지 추출 (URL/HTML 제거)
   * ========================= */
  const extractMessage = async (res: Response) => {
    try {
      const data = await res.clone().json()
      if (data?.message) return String(data.message)
      if (data?.error_description) return String(data.error_description)
      if (typeof data === "string") return data
    } catch {}
    try {
      const text = await res.text()
      return text.replace(/https?:\/\/[^\s]+/g, "").replace(/<[^>]*>/g, "").trim() || "요청이 실패했습니다."
    } catch {
      return "네트워크 오류가 발생했습니다."
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL;
      console.log("초기 gatewayUrl 값 : ", gatewayUrl)

      // Basic a_auth 헤더를 위한 client:secret 인코딩
      const client_id = 'uengine-client';
      const client_secret = 'uengine-secret';
      const basicAuth = typeof window !== 'undefined' ? btoa(`${client_id}:${client_secret}`) : '';

      // Spring OAuth2는 x-www-form-urlencoded 형식의 데이터를 기대합니다.
      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('username', loginForm.email);
      params.append('password', loginForm.password);

      const response = await fetch(`${gatewayUrl}/oauth/token`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      if (!response.ok) {
        // ❶ 서버 메시지 추출
        let errorMessage = await extractMessage(response);

        // ❷ 중첩 JSON/남은 횟수 처리 + 실패 유형 매핑
        let remain: number | null = null;
        try {
          const j = await response.clone().json();
          const raw = (j?.error_description || j?.message || '').toString().toLowerCase();
          if (
            j?.error === 'invalid_grant' ||
            j?.error === 'bad_credentials' ||
            raw.includes('bad credentials') ||
            raw.includes('password') ||
            raw.includes('username') ||
            raw.includes('invalid')
          ) {
            errorMessage = GENERIC_BAD_CREDENTIALS;
          }
          if (j?.remaining_attempts !== undefined) {
            remain = Number(j.remaining_attempts);
          }
        } catch {}

        // ❸ 5xx 또는 내부 서버 에러 문구 → 통합 문구로 덮어쓰기
        if (response.status >= 500 || /internal server error/i.test(errorMessage)) {
          errorMessage = GENERIC_BAD_CREDENTIALS;
        }

        // ❹ 알림 출력
        if (remain !== null && remain >= 0) {
          showAlert(remain > 0 ? `${errorMessage} 남은 횟수: ${remain}회` : errorMessage);
        } else {
          showAlert(errorMessage || GENERIC_BAD_CREDENTIALS);
        }
        return;
      }

      const data = await response.json();
      const decodedToken = jwtDecode<DecodedToken>(data.access_token);
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('userIdentifier', decodedToken.userIdentifier);
      localStorage.setItem('username', decodedToken.username);

      const response2 = await fetch(`${gatewayUrl}/users/${decodedToken.userIdentifier}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })

      if (!response2.ok) {
        const msg = await extractMessage(response2)
        showAlert(msg || GENERIC_BAD_CREDENTIALS)
        return
      }

      const data2 = await response2.json();

      localStorage.setItem('name', data2.name)
      localStorage.setItem('role', data2.role)
      localStorage.setItem('phone', data2.phone)

      showAlert("로그인 성공!")
      setTimeout(() => { window.location.href = '/' }, 300)

    } catch (error) {
      console.error("로그인 실패:", error);
      showAlert(GENERIC_BAD_CREDENTIALS)
    } finally {
      setIsLoading(false);
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    const hasErrors = Object.values(validationErrors).some((error) => error !== "")
    if (hasErrors) {
      showAlert("입력 정보를 다시 확인해주세요.")
      return
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      showAlert("비밀번호가 일치하지 않습니다.")
      return
    }

    setIsLoading(true)
    try {
      const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL;
      const { confirmPassword, agreeTerms, ...payload } = registerForm;

      const response = await fetch(`${gatewayUrl}/oauth/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const msg = await extractMessage(response)
        showAlert(msg || '회원가입에 실패했습니다.')
        return
      }

      await response.text();
      showAlert("회원가입이 완료되었습니다! 로그인 탭으로 이동합니다.")
      setActiveTab("login")

    } catch (error) {
      console.error("회원가입 실패:", error);
      showAlert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-amber-900" />
          </div> */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">양봉 AI 서비스</h1>
          <p className="text-gray-600">양봉농협과 함께하는 스마트 양봉 솔루션</p>
        </div>

        {/* Login/Register Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Tab Navigation */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "login" ? "bg-white text-amber-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === "register" ? "bg-white text-amber-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              회원가입
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">이메일</Label>
                <Input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</Label>
                <Input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <Checkbox
                    checked={loginForm.remember}
                    onCheckedChange={(checked) => setLoginForm({ ...loginForm, remember: !!checked })}
                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
                </label>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!isLoading ? (
                  "로그인"
                ) : (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    로그인 중...
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">이름</Label>
                  <Input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={(e) => handleRegisterFormChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="이름"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">연락처</Label>
                  <Input
                    type="tel"
                    required
                    value={registerForm.phone}
                    onChange={(e) => handleRegisterFormChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="01012345678"
                  />
                </div>
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">이메일</Label>
                <Input
                  type="email"
                  required
                  value={registerForm.email}
                  onChange={(e) => handleRegisterFormChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                    validationErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="이메일을 입력하세요"
                />
                {validationErrors.email && <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>}
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</Label>
                <Input
                  type="password"
                  required
                  value={registerForm.password}
                  onChange={(e) => handleRegisterFormChange("password", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                    validationErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="비밀번호를 입력하세요"
                />
                {validationErrors.password && <p className="mt-1 text-sm text-red-500">{validationErrors.password}</p>}
              </div>
              <div>
                <Label className="block text_sm font-medium text-gray-700 mb-2">비밀번호 확인</Label>
                <Input
                  type="password"
                  required
                  value={registerForm.confirmPassword}
                  onChange={(e) => handleRegisterFormChange("confirmPassword", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                    validationErrors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="비밀번호를 다시 입력하세요"
                />
                {validationErrors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.confirmPassword}</p>
                )}
              </div>
              <div className="flex items-start">
                <Checkbox
                  checked={registerForm.agreeTerms}
                  onCheckedChange={(checked) => setRegisterForm({ ...registerForm, agreeTerms: !!checked })}
                  required
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  <button type="button" onClick={() => setIsTermsModalOpen(true)} className="text-amber-600 hover:text-amber-700 underline">
                    서비스 이용약관
                  </button>{" "}
                  및{" "}
                  <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="text-amber-600 hover:text-amber-700 underline">
                    개인정보처리방침
                  </button>
                  에 동의합니다.
                </span>
              </div>
              <Button
                type="submit"
                disabled={isLoading || Object.values(validationErrors).some((error) => error !== "")}
                className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!isLoading ? (
                  "회원가입"
                ) : (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    가입 중...
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">양봉농협과 함께하는 스마트 양봉 솔루션</p>
          </div>
        </div>
      </div>
    </div>
    <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />

    {/* 🔔 커스텀 알림 모달 */}
    <AlertModal message={alertMsg} onClose={() => setAlertMsg("")} />
    </>
  )
}
