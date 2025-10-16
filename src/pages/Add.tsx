import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { createBucket } from '@/api/fetchBuckets'
import { CreateBucketType } from '@/types/bucket'

export function Add() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<CreateBucketType>({
    title: '',
    description: '',
    // is_completed: false,
  })

  // 등록 버튼 클릭 시 실행되는 함수
  const handleSubmit = () => {
    // 제목이 비어있으면 경고
    if (!formData.title.trim()) {
      alert('제목을 입력해주세요!')
      return
    }

    // 여기에 나중에 API 호출 또는 상태 저장 로직 추가
    console.log('새 버킷리스트 등록:', formData)

    createBucket(formData as CreateBucketType)

    // 등록 후 홈으로 이동
    alert('목표가 등록되었습니다!')
    navigate('/')
  }

  // 취소 버튼 클릭 시 실행되는 함수
  const handleCancel = () => {
    // 입력한 내용이 있으면 확인 메시지
    if (formData.title || formData.description) {
      if (!confirm('작성 중인 내용이 있습니다. 정말 취소하시겠습니까?')) {
        return
      }
    }

    // 홈으로 이동
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-4">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <h1 className="mb-8 text-3xl font-bold">새 목표 추가</h1>

          {/* Form */}
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base font-medium">
                    제목 <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="예: 마라톤 완주하기"
                    value={formData.title}
                    onChange={e =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-base font-medium"
                  >
                    설명
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="이 목표를 달성하고 싶은 이유나 구체적인 계획을 적어보세요..."
                    value={formData.description}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    className="min-h-24"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{formData.description.length}/500</span>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center gap-3 pt-6">
                  <Button type="submit" className="flex-1">
                    등록
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                  >
                    취소
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
