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
  CheckCircle2,
  Calendar,
  Tag,
  Search,
  MessageSquare,
  Trophy,
  Star,
} from 'lucide-react'

// Mock 데이터
const filledBuckets = [
  {
    id: 1,
    title: '첫 해외여행 가기',
    description: '유럽 배낭여행을 통해 다양한 문화를 경험하고 싶었다.',
    category: '여행',
    completedAt: '2024-08-15',
    completionCount: 1,
    completionNote:
      '파리, 런던, 로마를 여행했다. 정말 잊을 수 없는 경험이었고, 특히 루브르 박물관에서 모나리자를 직접 본 순간이 가장 인상깊었다.',
    rating: 5,
  },
  {
    id: 2,
    title: '10km 달리기 완주',
    description:
      '건강한 몸을 만들기 위해 꾸준히 운동하고 10km를 완주하고 싶었다.',
    category: '운동',
    completedAt: '2024-07-20',
    completionCount: 3,
    completionNote:
      '처음에는 3km도 힘들었는데, 꾸준한 연습으로 10km를 완주할 수 있게 되었다.',
    rating: 4,
  },
  {
    id: 3,
    title: '요리 클래스 수강하기',
    description: '이탈리안 요리를 배워서 맛있는 파스타를 만들고 싶었다.',
    category: '취미',
    completedAt: '2024-06-10',
    completionCount: 1,
    completionNote:
      '6주간의 이탈리안 요리 클래스를 수강했다. 이제 집에서도 맛있게 만들 수 있다.',
    rating: 5,
  },
]

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
    />
  ))
}

export function Filled() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/filled" />

      <div className="flex">
        <Sidebar currentPath="/filled" />

        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">채워진 버킷</h1>
                  <p className="text-gray-600">
                    완료한 목표들입니다. 당신의 성취를 축하합니다!
                  </p>
                </div>
                <Button>
                  <a href="/add" className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />새 목표 추가
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />총{' '}
                  {filledBuckets.length}개 완료
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />총 5회 달성
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  평균 평점 4.7
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="완료한 목표 검색..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Bucket List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filledBuckets.map(bucket => (
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
                          {bucket.completionCount > 1 && (
                            <Badge variant="secondary" className="text-xs">
                              <Trophy className="h-3 w-3 mr-1" />
                              {bucket.completionCount}회 달성
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Completion Note */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">완료 후기</span>
                      </div>
                      <CardDescription className="line-clamp-3 pl-6">
                        {bucket.completionNote}
                      </CardDescription>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-600">만족도:</span>
                      <div className="flex items-center gap-1">
                        {renderStars(bucket.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({bucket.rating}/5)
                      </span>
                    </div>

                    {/* Completion Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{bucket.completedAt} 완료</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <Button variant="outline" size="sm">
                        상세 보기
                      </Button>
                      <Button variant="outline" size="sm">
                        다시 도전
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
