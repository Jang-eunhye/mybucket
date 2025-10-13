/**
 * Home 페이지 - 모바일 중심 UI
 *
 * 전체 버킷리스트 표시 (미완료 + 완료)
 * 필터링: 전체, 미완료, 완료
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { BucketCard } from '../components/common/BucketCard'
import { Plus } from 'lucide-react'
import { getAllBuckets } from '@/api/fetchBuckets'
import { BucketType } from '@/types/bucket'

type FilterType = 'all' | 'incomplete' | 'complete'

export function Home() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [buckets, setBuckets] = useState<BucketType[]>([])
  const navigate = useNavigate()

  // 데이터 로딩
  useEffect(() => {
    async function loadBuckets() {
      const data = await getAllBuckets()
      setBuckets(data || [])
    }
    loadBuckets()
  }, [])

  // 필터링된 버킷리스트
  const filteredBuckets = buckets
    .filter(bucket => {
      if (filter === 'incomplete') return !bucket.is_completed
      if (filter === 'complete') return bucket.is_completed
      return true // 'all'
    })
    .sort((a, b) => {
      const aDate = new Date(a.updated_at || a.created_at).getTime()
      const bDate = new Date(b.updated_at || b.created_at).getTime()
      return bDate - aDate
    })

  // 통계
  const totalCount = buckets.length
  const incompleteCount = buckets.filter(b => !b.is_completed).length
  const completeCount = buckets.filter(b => b.is_completed).length

  // // 로딩 중
  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50">
  //       <Header />
  //       <div className="p-4 text-center py-12 text-gray-500">로딩 중...</div>
  //     </div>
  //   )
  // }

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
                completed={bucket.is_completed}
                completedAt={
                  bucket.is_completed ? bucket.completed_at : undefined
                }
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
