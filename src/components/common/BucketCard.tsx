/**
 * BucketCard 컴포넌트
 *
 * 버킷리스트 카드 - 모바일 중심 UI
 * 제목, 완료 여부, 완료 날짜만 표시
 */

import { Card, CardContent } from '../ui/card'
import { CheckCircle2, Circle } from 'lucide-react'

interface BucketCardProps {
  title: string
  completed: boolean
  completedAt?: string // 완료 날짜 (옵션)
  onClick?: () => void
}

export function BucketCard({
  title,
  completed,
  completedAt,
  onClick,
}: BucketCardProps) {
  return (
    <Card
      className="hover:bg-gray-50 transition-colors cursor-pointer active:bg-gray-100"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          {/* 완료 여부 아이콘 */}
          {completed ? (
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
          ) : (
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0" />
          )}

          {/* 제목 및 날짜 */}
          <div className="flex-1 min-w-0">
            <h3
              className={`text-base font-medium truncate ${
                completed ? 'text-gray-500 line-through' : 'text-gray-900'
              }`}
            >
              {title}
            </h3>

            {/* 완료 날짜 (완료된 경우만) */}
            {completed && completedAt && (
              <p className="text-xs text-gray-500 mt-1">{completedAt} 완료</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
