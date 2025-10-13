import { Header } from '../components/layout/Header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'
import {
  Target,
  CheckCircle2,
  TrendingUp,
  Trophy,
  Star,
  Clock,
} from 'lucide-react'

// Mock 통계 데이터
const overallStats = {
  totalGoals: 26,
  completedGoals: 8,
  inProgressGoals: 18,
  completionRate: 30.8,
  averageRating: 4.3,
  thisMonthCompleted: 3,
  thisYearCompleted: 8,
}

const categoryStats = [
  { name: '여행', total: 5, completed: 2, completionRate: 40 },
  { name: '운동', total: 4, completed: 2, completionRate: 50 },
  { name: '학습', total: 6, completed: 2, completionRate: 33.3 },
  { name: '취미', total: 4, completed: 2, completionRate: 50 },
  { name: '커리어', total: 3, completed: 0, completionRate: 0 },
]

const recentAchievements = [
  {
    title: '첫 해외여행 가기',
    category: '여행',
    completedAt: '2024-08-15',
    rating: 5,
  },
  {
    title: '10km 달리기 완주',
    category: '운동',
    completedAt: '2024-07-20',
    rating: 4,
  },
  {
    title: '요리 클래스 수강하기',
    category: '취미',
    completedAt: '2024-06-10',
    rating: 5,
  },
]

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
    />
  ))
}

export function Stats() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">통계 대시보드</h1>
            <p className="text-gray-600">
              당신의 버킷리스트 달성 현황을 확인해보세요.
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">전체 목표</CardTitle>
                <Target className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {overallStats.totalGoals}
                </div>
                <p className="text-xs text-gray-600">
                  완료 {overallStats.completedGoals}개 · 진행중{' '}
                  {overallStats.inProgressGoals}개
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">달성률</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {overallStats.completionRate}%
                </div>
                <Progress
                  value={overallStats.completionRate}
                  className="mt-2"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  평균 만족도
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {overallStats.averageRating}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {renderStars(Math.round(overallStats.averageRating))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  이번 달 완료
                </CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {overallStats.thisMonthCompleted}
                </div>
                <p className="text-xs text-gray-600">
                  올해 총 {overallStats.thisYearCompleted}개 완료
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>카테고리별 달성률</CardTitle>
                <CardDescription>
                  각 카테고리별 목표 완료 현황입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryStats.map(category => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {category.completed}/{category.total} (
                          {category.completionRate.toFixed(1)}%)
                        </span>
                      </div>
                      <Progress value={category.completionRate} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  최근 달성 목표
                </CardTitle>
                <CardDescription>최근에 완료한 목표들입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-100"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">
                          {achievement.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {achievement.category}
                          </Badge>
                          <span className="text-xs text-gray-600">
                            {achievement.completedAt}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(achievement.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                월별 요약
              </CardTitle>
              <CardDescription>매월 목표 달성 현황입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { month: '1월', completed: 0 },
                  { month: '2월', completed: 1 },
                  { month: '3월', completed: 1 },
                  { month: '4월', completed: 1 },
                  { month: '5월', completed: 1 },
                  { month: '6월', completed: 1 },
                  { month: '7월', completed: 1 },
                  { month: '8월', completed: 1 },
                ].map(data => (
                  <div
                    key={data.month}
                    className="text-center p-4 bg-gray-100 rounded-lg"
                  >
                    <div className="text-sm text-gray-600 mb-1">
                      {data.month}
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {data.completed}
                    </div>
                    <div className="text-xs text-gray-500">개 완료</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
