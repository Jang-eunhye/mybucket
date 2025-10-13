/**
 * BucketDetail 페이지 - 모바일 중심 UI
 *
 * 버킷리스트 상세 보기 및 수정
 */

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { ArrowLeft, Save, Trash2, CheckCircle2, Circle } from 'lucide-react'

// Mock 데이터 (실제로는 props나 API에서 가져옴)
const mockBuckets = [
  {
    id: '1',
    title: '마라톤 완주하기',
    description: '42.195km 풀코스 마라톤을 완주하고 싶다.',
    completed: false,
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    title: '첫 해외여행 가기',
    description: '유럽 배낭여행을 통해 다양한 문화를 경험하고 싶었다.',
    completed: true,
    completedAt: '2024-08-15',
    createdAt: '2024-01-10',
  },
]

export function BucketDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Mock 데이터에서 해당 버킷 찾기
  const bucket = mockBuckets.find(b => b.id === id)

  const [formData, setFormData] = useState({
    title: bucket?.title || '',
    description: bucket?.description || '',
    completed: bucket?.completed || false,
  })

  const [isEditing, setIsEditing] = useState(false)

  if (!bucket) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="p-4 text-center py-12 text-gray-500">
          버킷리스트를 찾을 수 없습니다.
        </div>
      </div>
    )
  }

  // 저장 핸들러
  const handleSave = () => {
    // 여기에 나중에 API 호출 또는 상태 업데이트
    console.log('수정된 데이터:', formData)
    alert('수정되었습니다!')
    setIsEditing(false)
  }

  // 삭제 핸들러
  const handleDelete = () => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return
    }
    // 여기에 나중에 API 호출
    console.log('삭제:', id)
    alert('삭제되었습니다!')
    navigate('/')
  }

  // 완료/미완료 토글
  const handleToggleComplete = () => {
    const newCompleted = !formData.completed
    setFormData({ ...formData, completed: newCompleted })
    // 여기에 나중에 API 호출
    console.log('완료 상태 변경:', newCompleted)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-4 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* 상단 네비게이션 */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 mr-2" />
              삭제
            </Button>
          </div>

          {/* 상세 정보 카드 */}
          <Card>
            <CardContent className="p-6">
              {isEditing ? (
                // 수정 모드
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base font-medium">
                      제목
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={e =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-base font-medium"
                    >
                      설명
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="min-h-32"
                    />
                  </div>

                  {/* 버튼 */}
                  <div className="flex gap-3 pt-4">
                    <Button onClick={handleSave} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      저장
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFormData({
                          title: bucket.title,
                          description: bucket.description,
                          completed: bucket.completed,
                        })
                        setIsEditing(false)
                      }}
                    >
                      취소
                    </Button>
                  </div>
                </div>
              ) : (
                // 보기 모드
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-4">
                      {formData.title}
                    </h1>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {formData.description || '설명이 없습니다.'}
                    </p>
                  </div>

                  {/* 메타 정보 */}
                  <div className="pt-4 border-t space-y-2 text-sm text-gray-600">
                    <div>생성일: {bucket.createdAt}</div>
                    {formData.completed && bucket.completedAt && (
                      <div className="text-green-600 font-medium">
                        완료일: {bucket.completedAt}
                      </div>
                    )}
                  </div>

                  {/* 버튼 */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleToggleComplete}
                      variant={formData.completed ? 'secondary' : 'default'}
                      className="flex-1"
                    >
                      {formData.completed ? (
                        <>
                          <Circle className="h-4 w-4 mr-2" />
                          미완료로 변경
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          완료 표시
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      수정
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
