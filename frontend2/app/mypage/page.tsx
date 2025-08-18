'use client' // 클라이언트 컴포넌트로 지정

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, User, Mail, MapPin, Edit, Camera, BarChart3, Flower } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

// 사용자 정보 타입을 정의합니다.
interface UserProfile {
  name: string;
  username: string; // 이메일
  role: string;
  address?: string; // 주소는 선택적일 수 있습니다.
}

export default function MyPage() {
  // 사용자 정보를 담을 state
  const [user, setUser] = useState<UserProfile | null>(null);
  // 로딩 상태를 관리할 state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지가 로드될 때 실행될 함수
    const fetchUserData = async () => {
      try {
        // localStorage에서 토큰과 사용자 ID를 가져옵니다.
        const accessToken = localStorage.getItem('accessToken');
        const userIdentifier = localStorage.getItem('userIdentifier');
        const gatewayUrl = process.env.NEXT_PUBLIC_GW_URL;

        if (!accessToken || !userIdentifier) {
          // 토큰이나 ID가 없으면 로그인 페이지로 리디렉션
          window.location.href = '/login';
          return;
        }

        // API 요청
        const response = await fetch(`${gatewayUrl}/users/${userIdentifier}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('사용자 정보를 불러오는데 실패했습니다.');
        }

        const userData: UserProfile = await response.json();
        setUser(userData); // 받아온 사용자 정보를 state에 저장
      } catch (error) {
        console.error(error);
        // 에러 발생 시 로그인 페이지로 보낼 수도 있습니다.
        // window.location.href = '/login';
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchUserData();
  }, []); // 빈 배열을 전달하여 최초 렌더링 시 한 번만 실행되도록 함

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Profile Skeleton */}
          <Card className="mb-8">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-10 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <Skeleton className="w-24 h-24 rounded-full border-amber-500" />
                <div className="flex-1 space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-6 w-48" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                  </div>
                  {/* <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-64" />
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Skeleton */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
            <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
            <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
          </div>

          {/* Membership Skeleton */}
          <Card className="mb-8"><CardContent className="p-4"><Skeleton className="h-28 w-full" /></CardContent></Card>

          {/* Activity Skeleton */}
          <Card>
            <CardHeader><Skeleton className="h-8 w-48" /></CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>사용자 정보를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* ... 헤더 ... */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Section */}
        <Card className="mb-8">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">내 프로필</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <Edit className="w-4 h-4 mr-2" />
                편집
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Profile Image */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-3 border-amber-500">
                  <AvatarImage src="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/3153.png" alt="프로필 사진" />
                  <AvatarFallback className="bg-amber-100 text-amber-700 text-xl font-semibold">{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                {/* <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button> */}
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>이름</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{user.name}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>이메일</span>
                    </div>
                    <p className="text-lg text-gray-900">{user.username}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>역할</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">{user.role}</Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      인증 회원
                    </Badge>
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>양봉장 위치</span>
                  </div>
                  <p className="text-lg text-gray-900">{user.address || '주소 정보 없음'}</p>
                </div> */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Usage Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">질병 진단 횟수</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">지역 분석 리포트</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Flower className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15</p>
                  <p className="text-sm text-gray-600">개화예측 조회</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">양봉농협 조합원 신청</h3>
                <p className="text-gray-600">양봉농협 조합원이 되어 더 많은 혜택을 받아보세요</p>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>• 전문가 1:1 상담 서비스</li>
                  <li>• 양봉 장비 할인 혜택</li>
                  <li>• 꿀 판매 지원 프로그램</li>
                </ul>
              </div>
              {user && user.role === 'USER' ? (
                <Link href="/membership-application">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3">조합원 신청하기</Button>
                </Link>
              ) : (
                <Button disabled className="bg-gray-400 cursor-not-allowed text-white px-6 py-3">
                  이미 조합원입니다
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">벌집 질병 진단 완료</p>
                  <p className="text-sm text-gray-600">바로아 진드기 의심 - 전문가 상담 권장</p>
                </div>
                <span className="text-sm text-gray-500">2시간 전</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">양평군 용문면 지역 분석 완료</p>
                  <p className="text-sm text-gray-600">양봉 적합도: 85점 (우수)</p>
                </div>
                <span className="text-sm text-gray-500">1일 전</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Flower className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">아카시아 개화예측 조회</p>
                  <p className="text-sm text-gray-600">예상 개화일: 5월 15일 ~ 5월 25일</p>
                </div>
                <span className="text-sm text-gray-500">3일 전</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}