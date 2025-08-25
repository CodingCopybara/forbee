"use client"
import { X } from "lucide-react"

interface TermsOfServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">서비스 이용약관</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="prose max-w-none">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">시행일자: 2024년 1월 1일</p>
            </div>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제1조 (목적)</h3>
              <p className="text-gray-700 mb-4">
                이 약관은 양봉 AI 서비스(이하 "회사")가 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제2조 (용어의 정의)</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>"서비스"라 함은 회사가 제공하는 양봉 AI 진단, 커뮤니티 등 모든 온라인 서비스를 의미합니다.</li>
                <li>"회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                <li>"아이디(ID)"라 함은 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</li>
                <li>"비밀번호"라 함은 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을 의미합니다.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제3조 (약관의 명시와 개정)</h3>
              <p className="text-gray-700 mb-4">
                회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 "약관의규제에관한법률", "정보통신망이용촉진및정보보호등에관한법률(이하 정보통신망법)" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제4조 (서비스의 제공 및 변경)</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>회사는 다음과 같은 업무를 수행합니다: AI 진단 서비스, 커뮤니티 서비스, 기타 회사가 정하는 업무.</li>
                <li>회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.</li>
                <li>서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 해당 서비스 초기화면에 게시하여야 합니다.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제5조 (회원가입)</h3>
              <p className="text-gray-700 mb-4">
                이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. 회사는 다음 각 호에 해당하지 않는 한 신청을 승낙합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>가입신청자가 이전에 회원자격을 상실한 적이 있는 경우</li>
                <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
