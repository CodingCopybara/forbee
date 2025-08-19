'use client'

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bug, MapPin, Flower, Users, Shield, BarChart3, TreePine } from "lucide-react"

export default function HomePage() {
  const featuresSectionRef = useRef(null);

  useEffect(() => {
    // Section fade-in observer
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach(section => sectionObserver.observe(section));

    // Card fade-in observer
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.card-fade-in');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animated');
            }, index * 150); // 0.15초 간격으로 카드 애니메이션 실행
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (featuresSectionRef.current) {
      cardObserver.observe(featuresSectionRef.current);
    }

    return () => {
      sections.forEach(section => sectionObserver.unobserve(section));
      if (featuresSectionRef.current) {
        cardObserver.unobserve(featuresSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 section-fade-in">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">양봉농협 공식 파트너</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI로 더욱 스마트해진
            <br />
            <span className="text-amber-500">양봉 관리</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            첨단 AI 기술로 벌집 건강 상태를 진단하고, 최적의 양봉 환경을 분석하여 더 건강하고 생산적인 양봉을
            도와드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pest-detection">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3">
                진단 시작하기
              </Button>
            </Link>
            <Link href="/community">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 bg-transparent"
              >
                커뮤니티 둘러보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white section-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">전문적인 양봉 AI 서비스</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              양봉농협과 함께 개발한 4가지 핵심 기능으로 양봉업의 효율성을 극대화하세요
            </p>
          </div>

          <div ref={featuresSectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 hover:border-amber-200 transition-colors card-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Bug className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">해충/질병 탐지</CardTitle>
                <CardDescription>벌집 사진을 업로드하면 AI가 즉시 분석하여 질병과 해충을 감지합니다</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 실시간 이미지 분석</li>
                  <li>• 위험도 등급 분류</li>
                  <li>• 전문가 상담 연결</li>
                </ul>
                <Link href="/pest-detection">
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white">진단 시작하기</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 hover:border-amber-200 transition-colors card-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">양봉 지역 분석</CardTitle>
                <CardDescription>지도 기반으로 선택한 양봉지 중심 반경 800m 이내 환경을 분석합니다</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 토지 비율 분석</li>
                  <li>• 유해 요소 탐지</li>
                  <li>• 양봉지 분석 리포트</li>
                </ul>
                <Link href="/area-analysis">
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white">지역 분석하기</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 hover:border-amber-200 transition-colors card-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">전국 개화시기 예측</CardTitle>
                <CardDescription>
                  AI 기반 개화시기 예측으로 주변 관측소의 개화시기를 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 실시간 개화 예측</li>
                  <li>• 매화, 개나리, 벚꽃, 아카시아 지원</li>
                  <li>• 채밀 최적 타이밍 파악</li>
                </ul>
                <Link href="/bloom-prediction">
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white">개화 정보 보기</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 hover:border-amber-200 transition-colors card-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">밀원수 지원 서비스</CardTitle>
                <CardDescription>
                  양봉농협과 함께하는 밀원수 지원 프로그램으로 더 풍성한 꿀 생산을 시작하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 묘목 지원</li>
                  <li>• 전문가 컨설팅</li>
                  <li>• 현장 방문 서비스</li>
                </ul>
                <Link href="/nectar-support">
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white">지원 신청하기</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-amber-50 section-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,200+</h3>
              <p className="text-gray-600">활성 양봉업자</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">98.5%</h3>
              <p className="text-gray-600">진단 정확도</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25%</h3>
              <p className="text-gray-600">평균 생산성 향상</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t section-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">지금 시작하세요</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            양봉농협과 함께하는 스마트 양봉의 새로운 시대를 경험해보세요
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-semibold">
              지금 시작하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
