"use client"
import { X } from "lucide-react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">개인정보처리방침</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div className="prose max-w-none">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">시행일자: 2024년 1월 1일 | 최종 수정일: 2024년 8월 13일</p>
            </div>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제1조 (개인정보의 처리목적)</h3>
              <p className="text-gray-700 mb-4">
                양봉 AI 서비스(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는
                다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라
                별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증</li>
                <li>AI 진단 서비스 제공: 해충/질병 탐지, 양봉 지역 분석, 밀원수 개화 예측 서비스</li>
                <li>커뮤니티 서비스 운영: 게시판 운영, QnA 서비스, 전문가 상담 연결</li>
                <li>서비스 개선: 서비스 이용 통계 분석, 맞춤형 서비스 제공</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제2조 (처리하는 개인정보의 항목)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">필수항목</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>이름, 이메일 주소, 비밀번호</li>
                    <li>양봉장 위치 정보 (서비스 제공을 위한 필수 정보)</li>
                    <li>서비스 이용 기록, 접속 로그, 접속 IP 정보</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">선택항목</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>전화번호 (전문가 상담 연결 시)</li>
                    <li>프로필 사진</li>
                    <li>양봉 경력 및 규모 정보</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제3조 (개인정보의 처리 및 보유기간)</h3>
              <p className="text-gray-700 mb-4">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  회원정보: 회원 탈퇴 시까지 (단, 관계법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사
                  종료 시까지)
                </li>
                <li>서비스 이용기록: 3년 (통신비밀보호법)</li>
                <li>AI 분석 데이터: 서비스 개선을 위해 익명화 처리 후 보관</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제4조 (개인정보의 제3자 제공)</h3>
              <p className="text-gray-700 mb-4">
                회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의
                동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">양봉농협과의 정보 공유</h4>
                <p className="text-gray-700 text-sm">
                  본 서비스는 양봉농협과의 협업으로 제공되며, 서비스 개선 및 전문가 상담 연결을 위해 필요한 최소한의
                  정보만을 공유합니다.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제5조 (정보주체의 권리·의무 및 행사방법)</h3>
              <p className="text-gray-700 mb-4">
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>개인정보 처리현황 통지요구</li>
                <li>개인정보 열람요구</li>
                <li>개인정보 정정·삭제요구</li>
                <li>개인정보 처리정지요구</li>
              </ul>
              <p className="text-gray-700 mt-4">
                권리 행사는 개인정보보호법 시행규칙 별지 제8호에 따라 작성하여 서면, 전자우편, 모사전송(FAX) 등을 통하여
                하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제6조 (개인정보의 안전성 확보조치)</h3>
              <p className="text-gray-700 mb-4">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
                <li>
                  기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화,
                  보안프로그램 설치
                </li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제7조 (개인정보보호책임자)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>개인정보보호책임자:</strong> 양봉 AI 서비스 운영팀
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>연락처:</strong> privacy@beekeeping-ai.co.kr
                </p>
                <p className="text-gray-700">
                  <strong>전화:</strong> 1588-0000 (평일 09:00~18:00)
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">제8조 (개인정보처리방침 변경)</h3>
              <p className="text-gray-700">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는
                경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
