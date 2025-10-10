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
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import {
  Circle,
  Calendar,
  Tag,
  Search,
  Plus,
  Clock,
  AlertCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock 데이터
const emptyBuckets = [
  {
    id: 1,
    title: '마라톤 완주하기',
    description:
      '42.195km 풀코스 마라톤을 완주하고 싶다. 건강한 몸과 정신력을 기르는 것이 목표.',
    category: '운동',
    deadline: '2024-12-31',
    priority: 'high',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: '일본 여행 가기',
    description:
      '도쿄와 오사카를 여행하며 일본 문화를 체험하고 맛있는 음식을 먹어보고 싶다.',
    category: '여행',
    deadline: '2024-10-15',
    priority: 'medium',
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    title: '새로운 언어 배우기',
    description:
      '스페인어를 배워서 남미 여행을 할 때 현지인들과 소통하고 싶다.',
    category: '학습',
    deadline: null,
    priority: 'low',
    createdAt: '2024-03-10',
  },
  {
    id: 4,
    title: '기타 연주 마스터하기',
    description:
      '좋아하는 노래들을 기타로 연주할 수 있을 정도로 실력을 늘리고 싶다.',
    category: '취미',
    deadline: '2024-08-30',
    priority: 'medium',
    createdAt: '2024-01-05',
  },
]

const priorityColors = {
  high: 'destructive',
  medium: 'default',
  low: 'secondary',
} as const

const priorityLabels = {
  high: '높음',
  medium: '보통',
  low: '낮음',
} as const

export function Empty() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/empty" />

      <div className="flex">
        <Sidebar currentPath="/empty" />

        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">비어있는 버킷</h1>
                  <p className="text-gray-600">
                    아직 완료하지 않은 목표들입니다. 하나씩 도전해보세요!
                  </p>
                </div>
                <Button>
                  <a href="/add" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />새 목표 추가
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Circle className="h-4 w-4" />총 {emptyBuckets.length}개 목표
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  마감 임박 2개
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="목표 검색..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Bucket List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emptyBuckets.map(bucket => (
                <Card
                  key={bucket.id}
                  className="hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {bucket.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {bucket.category}
                          </Badge>
                          <Badge
                            variant={
                              priorityColors[
                                bucket.priority as keyof typeof priorityColors
                              ]
                            }
                            className="text-xs"
                          >
                            {
                              priorityLabels[
                                bucket.priority as keyof typeof priorityLabels
                              ]
                            }
                          </Badge>
                        </div>
                      </div>
                      <Circle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-3">
                      {bucket.description}
                    </CardDescription>

                    <div className="space-y-2 text-sm text-gray-600">
                      {bucket.deadline && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{bucket.deadline}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{bucket.createdAt} 생성</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <Button variant="outline" size="sm">
                        수정
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        완료 표시
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
