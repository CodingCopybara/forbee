"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Eye, ThumbsUp, MessageCircle, Share2, Bookmark, MoreVertical, Reply } from "lucide-react"

// Mock data - 실제로는 props나 API에서 가져올 데이터
const mockPost = {
  id: 1,
  title: "올해 아카시아 꿀 수확량이 작년보다 좋네요",
  content: `안녕하세요, 양봉을 시작한 지 5년째인 김양봉입니다.

올해 아카시아 꿀 수확을 마쳤는데, 작년 대비 약 30% 정도 수확량이 증가했습니다. 

**주요 변화점들:**
1. 새로운 위치로 양봉장 이전 (AI 지역 분석 서비스 활용)
2. 질병 예방을 위한 정기적인 AI 진단 활용
3. 밀원수 개화시기 예측 데이터 활용한 적절한 이동

특히 이번에 양봉 AI 서비스의 지역 분석 기능을 활용해서 새로운 양봉장 위치를 선정했는데, 정말 도움이 많이 되었습니다. 

다른 분들도 혹시 비슷한 경험이 있으시다면 공유해주세요!

#아카시아꿀 #수확후기 #AI서비스`,
  author: "김양봉",
  avatar: "/placeholder.svg?height=40&width=40",
  date: "2024-01-15 14:30",
  views: 245,
  likes: 12,
  comments: 8,
  category: "수확후기",
  tags: ["아카시아꿀", "수확후기", "AI서비스"],
  isLiked: false,
  isBookmarked: false,
}

const mockComments = [
  {
    id: 1,
    author: "이벌꿀",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "2024-01-15 15:45",
    content: "축하드립니다! 저도 AI 지역 분석 서비스 사용해보고 싶은데, 어떤 점이 가장 도움이 되었나요?",
    likes: 3,
    replies: [
      {
        id: 11,
        author: "김양봉",
        avatar: "/placeholder.svg?height=32&width=32",
        date: "2024-01-15 16:20",
        content:
          "주변 밀원수 분포와 농약 사용 지역을 미리 파악할 수 있어서 좋았어요. 특히 반경 1.2km 내 분석이 정말 정확했습니다.",
        likes: 2,
      },
    ],
  },
  {
    id: 2,
    author: "박꿀벌",
    avatar: "/placeholder.svg?height=32&width=32",
    date: "2024-01-15 17:10",
    content: "30% 증가라니 정말 대단하시네요! 혹시 벌통 개수는 몇 개 정도 운영하고 계신가요?",
    likes: 1,
    replies: [],
  },
]

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState(mockPost)
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleLike = () => {
    setPost((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
    }))
  }

  const handleBookmark = () => {
    setPost((prev) => ({
      ...prev,
      isBookmarked: !prev.isBookmarked,
    }))
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: Date.now(),
      author: "현재사용자",
      avatar: "/placeholder.svg?height=32&width=32",
      date: new Date().toLocaleString("ko-KR"),
      content: newComment,
      likes: 0,
      replies: [],
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  const handleReplySubmit = (commentId: number) => {
    if (!replyContent.trim()) return

    const reply = {
      id: Date.now(),
      author: "현재사용자",
      avatar: "/placeholder.svg?height=32&width=32",
      date: new Date().toLocaleString("ko-KR"),
      content: replyContent,
      likes: 0,
    }

    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
      ),
    )
    setReplyContent("")
    setReplyTo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/community">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              목록으로
            </Button>
          </Link>
        </div>

        {/* Post */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{post.category}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-4">{post.title}</h1>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
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
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{post.content}</div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <div className="flex items-center gap-4">
                <Button
                  variant={post.isLiked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className={post.isLiked ? "bg-amber-500 hover:bg-amber-600" : ""}
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  좋아요 {post.likes}
                </Button>
                <Button
                  variant={post.isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={handleBookmark}
                  className={post.isBookmarked ? "bg-amber-500 hover:bg-amber-600" : ""}
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  북마크
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Comments */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">댓글 {comments.length}개</h3>
          </CardHeader>
          <CardContent>
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="댓글을 작성해주세요..."
                rows={3}
                className="mb-3"
              />
              <div className="flex justify-end">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
                  댓글 작성
                </Button>
              </div>
            </form>

            <Separator className="mb-6" />

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-800 text-sm mb-2">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-6 px-2"
                          onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                        >
                          <Reply className="h-3 w-3 mr-1" />
                          답글
                        </Button>
                      </div>

                      {/* Reply Form */}
                      {replyTo === comment.id && (
                        <div className="mt-3 pl-4 border-l-2 border-gray-200">
                          <Textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="답글을 작성해주세요..."
                            rows={2}
                            className="mb-2"
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleReplySubmit(comment.id)}
                              className="bg-amber-500 hover:bg-amber-600 text-white"
                            >
                              답글 작성
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => setReplyTo(null)}>
                              취소
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-3">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-3">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{reply.author[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-xs">{reply.author}</span>
                                  <span className="text-xs text-gray-500">{reply.date}</span>
                                </div>
                                <p className="text-gray-800 text-xs mb-1">{reply.content}</p>
                                <Button variant="ghost" size="sm" className="text-xs h-5 px-1">
                                  <ThumbsUp className="h-2 w-2 mr-1" />
                                  {reply.likes}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
