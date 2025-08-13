"use client"

import Link from "next/link"
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
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐝</span>
                </div>
                <span className="text-xl font-bold text-white">양봉 AI</span>
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
            <p>&copy; 2024 양봉 AI. All rights reserved. Powered by 양봉농협</p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </>
  )
}
