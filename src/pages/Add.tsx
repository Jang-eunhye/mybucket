import { useState } from 'react'
import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { ArrowLeft, Save, Target, AlertCircle } from 'lucide-react'

const categories = [
  '여행',
  '운동',
  '학습',
  '취미',
  '인간관계',
  '커리어',
  '건강',
  '기타',
]

export function Add() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    deadline: '',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/add" />

      <div className="flex">
        <Sidebar currentPath="/add" />

        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Button variant="ghost" size="sm">
                  <a href="/empty" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    돌아가기
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold">새 목표 추가</h1>
              </div>
              <p className="text-gray-600">
                새로운 버킷리스트 목표를 만들어보세요.
              </p>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>목표 정보</CardTitle>
                <CardDescription>
                  달성하고 싶은 목표에 대한 정보를 입력해주세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium">
                      목표 제목 <span className="text-red-600">*</span>
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
                      className="text-sm font-medium"
                    >
                      목표 설명
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
                      <span>목표에 대한 자세한 설명을 적어주세요.</span>
                      <span>{formData.description.length}/500</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">카테고리</Label>
                    <select
                      value={formData.category}
                      onChange={e =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">목표의 카테고리를 선택해주세요</option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Priority */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">우선순위</Label>
                    <div className="space-y-3">
                      {[
                        {
                          value: 'low',
                          label: '낮음',
                          description: '언젠가는 해보고 싶은 목표',
                        },
                        {
                          value: 'medium',
                          label: '보통',
                          description: '꽤 중요한 목표',
                        },
                        {
                          value: 'high',
                          label: '높음',
                          description: '꼭 달성하고 싶은 목표',
                        },
                      ].map(option => (
                        <div
                          key={option.value}
                          className="flex items-start space-x-3"
                        >
                          <input
                            type="radio"
                            id={option.value}
                            name="priority"
                            value={option.value}
                            checked={formData.priority === option.value}
                            onChange={e =>
                              setFormData({
                                ...formData,
                                priority: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={option.value}
                              className="font-medium cursor-pointer"
                            >
                              {option.label}
                            </Label>
                            <p className="text-sm text-gray-600">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      목표 기한 (선택사항)
                    </Label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={e =>
                        setFormData({ ...formData, deadline: e.target.value })
                      }
                    />
                    <p className="text-xs text-gray-600">
                      기한을 설정하면 마감일이 다가올 때 알림을 받을 수
                      있습니다.
                    </p>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex items-center gap-3 pt-6">
                    <Button type="button" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      목표 생성하기
                    </Button>
                    <Button type="button" variant="outline">
                      <a href="/empty">취소</a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">💡 목표 설정 팁</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <div>
                  <strong className="text-gray-900">
                    구체적으로 작성하세요:
                  </strong>{' '}
                  "운동하기"보다는 "주 3회 헬스장 가기"가 더 좋습니다.
                </div>
                <div>
                  <strong className="text-gray-900">
                    측정 가능하게 만드세요:
                  </strong>{' '}
                  "책 많이 읽기"보다는 "올해 50권 읽기"가 더 명확합니다.
                </div>
                <div>
                  <strong className="text-gray-900">
                    현실적인 기한을 설정하세요:
                  </strong>{' '}
                  너무 짧거나 긴 기한보다는 적절한 도전이 되는 기한이 좋습니다.
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
