import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Progress } from '../components/ui/progress'
import {
  Circle,
  CheckCircle2,
  BarChart3,
  Plus,
  Target,
  TrendingUp,
} from 'lucide-react'

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/" />

      <div className="flex">
        <Sidebar currentPath="/" />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                안녕하세요! 오늘도 목표를 향해 나아가볼까요?
              </h1>
              <p className="text-gray-600">
                나만의 버킷리스트를 관리하고 인생 목표를 달성해보세요.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    전체 목표
                  </CardTitle>
                  <Target className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20</div>
                  <p className="text-xs text-gray-600">완료 8개, 진행중 12개</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">달성률</CardTitle>
                  <TrendingUp className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">40%</div>
                  <Progress value={40} className="mt-2" />
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
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <p className="text-xs text-gray-600">지난 달보다 +1개</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="/empty">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Circle className="h-8 w-8 text-gray-500 mb-2" />
                    <h3 className="font-medium">비어있는 버킷</h3>
                    <p className="text-sm text-gray-600 text-center">
                      아직 완료하지 않은 목표들
                    </p>
                  </CardContent>
                </a>
              </Card>

              <Card className="hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="/filled">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-medium">채워진 버킷</h3>
                    <p className="text-sm text-gray-600 text-center">
                      완료한 목표들
                    </p>
                  </CardContent>
                </a>
              </Card>

              <Card className="hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="/stats">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium">통계</h3>
                    <p className="text-sm text-gray-600 text-center">
                      달성률과 통계 확인
                    </p>
                  </CardContent>
                </a>
              </Card>

              <Card className="hover:bg-gray-100 transition-colors cursor-pointer">
                <a href="/add">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Plus className="h-8 w-8 text-yellow-600 mb-2" />
                    <h3 className="font-medium">새 목표 추가</h3>
                    <p className="text-sm text-gray-600 text-center">
                      새로운 버킷리스트 만들기
                    </p>
                  </CardContent>
                </a>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
                <CardDescription>
                  최근에 추가하거나 완료한 목표들을 확인해보세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium">마라톤 완주하기</p>
                      <p className="text-sm text-gray-600">3일 전 완료</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <Plus className="h-5 w-5 text-yellow-600" />
                    <div className="flex-1">
                      <p className="font-medium">일본 여행 가기</p>
                      <p className="text-sm text-gray-600">1주일 전 추가</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium">새로운 언어 배우기</p>
                      <p className="text-sm text-gray-600">2주일 전 완료</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
