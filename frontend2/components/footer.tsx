"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import PrivacyPolicyModal from "./privacy-policy-modal"

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  <Image
                    src="/NongHyup.png"   // /public/bee-logo.png 에 파일 두기
                    alt="양봉 AI 로고"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm">AI 기술로 더 스마트한 양봉을 실현합니다</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/pest-detection" className="hover:text-amber-400 transition-colors">
                    해충/질병 탐지
                  </Link>
                </li>
                <li>
                  <Link href="/area-analysis" className="hover:text-amber-400 transition-colors">
                    지역 분석
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    개화 예측
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    밀원수 지원
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">커뮤니티</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/community" className="hover:text-amber-400 transition-colors">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-amber-400 transition-colors">
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-amber-400 transition-colors">
                    QnA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">지원</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    고객센터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    이용약관
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    개인정보처리방침
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>사업자등록번호 203-82-32164(본사) ｜ 139-82-01832(경제사업부) ｜ 558-82-00295(구매사업단)</p>
            <p>사업장 소재지[본점] 04589 서울특별시 중구 다산로 178 한국양봉농협 본점</p>
            <p>대표자 김용래 ｜ 통신판매업신고 제2009-경기안성-0120 ｜ 개인정보관리책임자 김기동 (nh170383-1@nonghyup.com)</p>
            <p>대표전화 02-2231-9856(본점) ㅣ 031-671-5000(경제사업부) ｜ 031-671-5009(구매사업단) ｜ 팩스 031-671-6880(경제사업부)</p>
            <p>&copy; 2025 양봉 AI. All rights reserved. Powered by 양봉농협</p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </>
  )
}
