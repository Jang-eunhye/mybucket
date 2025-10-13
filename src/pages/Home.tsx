/**
 * Home 페이지 - 모바일 중심 UI
 *
 * 전체 버킷리스트 표시 (미완료 + 완료)
 * 필터링: 전체, 미완료, 완료
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { BucketCard } from '../components/common/BucketCard'
import { Plus } from 'lucide-react'

// Mock 데이터 (미완료 + 완료)
const allBuckets = [
  {
    id: 1,
    title: '마라톤 완주하기',
    completed: false,
    updatedAt: '2024-03-15',
  },
  {
    id: 2,
    title: '첫 해외여행 가기',
    completed: true,
    completedAt: '2024-08-15',
    updatedAt: '2024-08-15',
  },
  {
    id: 3,
    title: '일본 여행 가기',
    completed: false,
    updatedAt: '2024-03-10',
  },
  {
    id: 4,
    title: '10km 달리기 완주',
    completed: true,
    completedAt: '2024-07-20',
    updatedAt: '2024-07-20',
  },
  {
    id: 5,
    title: '새로운 언어 배우기',
    completed: false,
    updatedAt: '2024-03-05',
  },
  {
    id: 6,
    title: '요리 클래스 수강하기',
    completed: true,
    completedAt: '2024-06-10',
    updatedAt: '2024-06-10',
  },
]

type FilterType = 'all' | 'incomplete' | 'complete'

export function Home() {
  const [filter, setFilter] = useState<FilterType>('all')
  const navigate = useNavigate()

  // 필터링된 버킷리스트
  const filteredBuckets = allBuckets
    .filter(bucket => {
      if (filter === 'incomplete') return !bucket.completed
      if (filter === 'complete') return bucket.completed
      return true // 'all'
    })
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )

  // 통계
  const totalCount = allBuckets.length
  const incompleteCount = allBuckets.filter(b => !b.completed).length
  const completeCount = allBuckets.filter(b => b.completed).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pb-20">
        {/* 필터 버튼 (통계 포함) */}
        <div className="bg-white px-4 py-3 flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>전체</span>
            <span
              className={`${filter === 'all' ? 'text-white' : 'text-gray-900'} font-semibold`}
            >
              {totalCount}
            </span>
          </button>
          <button
            onClick={() => setFilter('incomplete')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'incomplete'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>미완료</span>
            <span
              className={`${filter === 'incomplete' ? 'text-white' : 'text-gray-900'} font-semibold`}
            >
              {incompleteCount}
            </span>
          </button>
          <button
            onClick={() => setFilter('complete')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'complete'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>완료</span>
            <span
              className={`${filter === 'complete' ? 'text-white' : 'text-green-600'} font-semibold`}
            >
              {completeCount}
            </span>
          </button>
        </div>

        {/* 버킷리스트 카드 */}
        <div className="p-4 space-y-3">
          {filteredBuckets.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {filter === 'incomplete' && '미완료 목표가 없습니다'}
              {filter === 'complete' && '완료한 목표가 없습니다'}
              {filter === 'all' && '버킷리스트가 없습니다'}
            </div>
          ) : (
            filteredBuckets.map(bucket => (
              <BucketCard
                key={bucket.id}
                title={bucket.title}
                completed={bucket.completed}
                completedAt={bucket.completed ? bucket.completedAt : undefined}
                onClick={() => navigate(`/bucket/${bucket.id}`)}
              />
            ))
          )}
        </div>
      </main>

      {/* 우측 하단 FAB (추가 버튼) */}
      <button
        onClick={() => navigate('/add')}
        className="fixed right-4 bottom-4 w-14 h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  )
}
