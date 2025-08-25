"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface MemberEnv {
  id: number | null
  install_place: string
  install_date: string
  memo: string
}

interface MemberEnvFormProps {
  id?: number
  onClose: () => void
}

export function MemberEnvForm({ id, onClose }: MemberEnvFormProps) {
  const [memberEnv, setMemberEnv] = useState<MemberEnv>({
    id: id || null,
    install_place: "",
    install_date: "",
    memo: "",
  })

  useEffect(() => {
    if (id) {
      const getMemberEnv = async () => {
        try {
          const response = await fetch(`/api/member-env/${id}`)
          if (response.ok) {
            const data = await response.json()
            setMemberEnv(data)
          } else {
            console.error("Failed to fetch member env data")
          }
        } catch (error) {
          console.error("Error fetching member env data:", error)
        }
      }
      getMemberEnv()
    }
  }, [id])

  const handleSave = async () => {
    try {
      const response = await fetch("/api/member-env", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memberEnv),
      })

      if (response.ok) {
        alert("저장되었습니다.")
        onClose()
      } else {
        alert("저장에 실패했습니다.")
      }
    } catch (error) {
      console.error("Error saving member env data:", error)
      alert("저장 중 오류가 발생했습니다.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setMemberEnv((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>사용자 환경 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="install_place">설치 장소</Label>
            <Input
              id="install_place"
              name="install_place"
              value={memberEnv.install_place}
              onChange={handleChange}
              placeholder="예: 서울시 강남구"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="install_date">설치 일자</Label>
            <Input
              id="install_date"
              name="install_date"
              type="date"
              value={memberEnv.install_date}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="memo">메모</Label>
            <Textarea
              id="memo"
              name="memo"
              value={memberEnv.memo}
              onChange={handleChange}
              placeholder="특이사항을 입력하세요."
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={handleSave}>저장</Button>
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
