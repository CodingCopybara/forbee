"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Eye, ThumbsUp, Pin, AlertCircle, HelpCircle, PenTool } from "lucide-react"

const tabs = [
  { id: "free", label: "자유게시판", icon: MessageCircle },
  { id: "notice", label: "공지사항", icon: AlertCircle },
  { id: "qna", label: "Q&A", icon: HelpCircle },
]

const mockPosts = {
  free: [
    {
      id: 1,
      title: "올해 아카시아 꿀 수확량이 작년보다 좋네요",
      author: "김양봉",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-15",
      views: 245,
      likes: 12,
      comments: 8,
      category: "수확후기",
    },
    {
      id: 2,
      title: "새로운 양봉장 위치 추천 부탁드립니다",
      author: "이벌꿀",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-14",
      views: 189,
      likes: 7,
      comments: 15,
      category: "질문",
    },
    {
      id: 3,
      title: "겨울철 월동 준비 체크리스트 공유합니다",
      author: "박꿀벌",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-13",
      views: 312,
      likes: 23,
      comments: 11,
      category: "정보공유",
    },
  ],
  notice: [
    {
      id: 1,
      title: "[중요] 2024년 양봉업 등록 신청 안내",
      author: "관리자",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-10",
      views: 1250,
      likes: 45,
      comments: 3,
      isPinned: true,
      isImportant: true,
    },
    {
      id: 2,
      title: "양봉 AI 서비스 업데이트 안내 (v2.1)",
      author: "관리자",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-08",
      views: 892,
      likes: 28,
      comments: 12,
      isPinned: true,
    },
    {
      id: 3,
      title: "겨울철 양봉장 관리 가이드라인",
      author: "관리자",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-05",
      views: 567,
      likes: 19,
      comments: 7,
    },
  ],
  qna: [
    {
      id: 1,
      title: "벌통에서 이상한 냄새가 나는데 질병인가요?",
      author: "신규양봉",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-15",
      views: 156,
      likes: 3,
      comments: 5,
      status: "답변완료",
      category: "질병진단",
    },
    {
      id: 2,
      title: "AI 분석 결과 해석이 어려워요",
      author: "초보양봉",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-14",
      views: 98,
      likes: 2,
      comments: 3,
      status: "답변대기",
      category: "AI서비스",
    },
    {
      id: 3,
      title: "꿀벌이 갑자기 줄어들고 있어요",
      author: "걱정양봉",
      avatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-13",
      views: 234,
      likes: 8,
      comments: 12,
      status: "답변완료",
      category: "관리문의",
    },
  ],
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("free")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "답변완료":
        return "bg-green-100 text-green-800"
      case "답변대기":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderPost = (post: any) => (
    <Card key={post.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {post.isPinned && <Pin className="h-4 w-4 text-amber-500" />}
              {post.isImportant && (
                <Badge variant="destructive" className="text-xs">
                  중요
                </Badge>
              )}
              {post.status && <Badge className={`text-xs ${getStatusColor(post.status)}`}>{post.status}</Badge>}
              {post.category && (
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              )}
            </div>
            <Link href={`/community/post/${post.id}`} className="hover:text-amber-600">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>{post.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 ml-4">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-amber-500 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
          <Link href="/community/write">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              <PenTool className="h-4 w-4 mr-2" />
              글쓰기
            </Button>
          </Link>
        </div>

        {/* Posts */}
        <div className="space-y-4">{mockPosts[activeTab as keyof typeof mockPosts].map(renderPost)}</div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              이전
            </Button>
            <Button variant="outline" size="sm" className="bg-amber-500 text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              다음
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
