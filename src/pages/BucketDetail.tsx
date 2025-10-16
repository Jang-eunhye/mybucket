/**
 * BucketDetail 페이지 - 모바일 중심 UI
 *
 * 버킷리스트 상세 보기 및 수정
 */

import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { ArrowLeft, Save, Trash2, CheckCircle2, Circle } from 'lucide-react'
import { BucketType } from '@/types/bucket'
import { deleteBucket, getBucketById, updateBucket } from '@/api/fetchBuckets'

export function BucketDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [bucket, setBucketDetail] = useState<BucketType>({
    id: '',
    title: '',
    description: '',
    is_completed: false,
    created_at: '',
    complete_note: '',
  })
  const [isEditing, setIsEditing] = useState(false)

  // 데이터 로딩
  useEffect(() => {
    ;(async () => {
      const data = await getBucketById(id as string)
      setBucketDetail(data[0])
      setFormData(data[0])
    })()
  }, [])

  const [formData, setFormData] = useState<BucketType>({
    id: bucket.id || '',
    created_at: bucket.created_at || '',
    title: bucket.title || '',
    description: bucket.description || '',
    is_completed: bucket.is_completed || false,
    complete_note: bucket.complete_note || '',
  })

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
    console.log('수정된 데이터:', formData)
    updateBucket(formData as BucketType)
    setBucketDetail(formData)
    alert('수정되었습니다!')
    setIsEditing(false)
  }

  // 삭제 핸들러
  const handleDelete = () => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return
    }
    deleteBucket(id as string)
    alert('삭제되었습니다!')
    navigate('/')
  }

  // 완료/미완료 버튼
  const handleToggleComplete = () => {
    const updatedFormData = {
      ...formData,
      is_completed: !formData.is_completed,
      completed_at: new Date().toISOString(),
    }

    setFormData(updatedFormData)
    setBucketDetail(updatedFormData)

    console.log('완료 상태가 변경되었습니다!', updatedFormData)
    updateBucket(updatedFormData as BucketType)
    alert('완료 상태가 변경되었습니다!')
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
                  {formData.is_completed && (
                    <section>
                      <div>
                        <Label
                          htmlFor="complete_note"
                          className="text-base font-medium"
                        >
                          완료 메모
                        </Label>
                        <Textarea
                          id="complete_note"
                          value={formData.complete_note}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              complete_note: e.target.value,
                            })
                          }
                        />
                      </div>
                    </section>
                  )}

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
                          id: bucket.id,
                          created_at: bucket.created_at,
                          title: bucket.title,
                          description: bucket.description,
                          is_completed: bucket.is_completed,
                          complete_note: bucket.complete_note,
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
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      {bucket.is_completed && (
                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          완료
                        </div>
                      )}
                      <h1 className="text-2xl font-bold">{bucket.title}</h1>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {bucket.description || '설명이 없습니다.'}
                    </p>
                  </section>

                  {/* 메타 정보 */}
                  <section className="pt-4 border-t space-y-2 text-sm text-gray-600">
                    <div>생성일: {bucket.created_at}</div>
                    {bucket.is_completed && bucket.completed_at && (
                      <div className="text-green-600 font-medium">
                        완료일: {bucket.completed_at}
                      </div>
                    )}
                  </section>

                  {/* 완료 섹션 */}
                  {bucket.is_completed && (
                    <section>
                      <Label
                        htmlFor="complete_note"
                        className="text-base font-medium"
                      >
                        완료 메모
                      </Label>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {bucket.complete_note}
                      </p>
                    </section>
                  )}

                  {/* 버튼 섹션 */}
                  <section className="flex gap-3 pt-4">
                    <Button
                      onClick={handleToggleComplete}
                      variant={bucket.is_completed ? 'secondary' : 'default'}
                      className="flex-1 text-base font-bold"
                    >
                      {bucket.is_completed ? (
                        <>
                          <Circle className="h-6 w-6 mr-2" />
                          미완료로 변경
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-6 w-6 mr-2" />
                          완료 하기
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                      className="text-base font-bold"
                    >
                      수정
                    </Button>
                  </section>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
