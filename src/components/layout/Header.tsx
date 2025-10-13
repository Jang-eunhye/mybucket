/**
 * Header 컴포넌트 - 모바일 중심 UI
 *
 * 로고 + 통계 아이콘만 표시
 */

import { Link } from 'react-router-dom'
import { Target, BarChart3 } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Target className="h-5 w-5 text-blue-600" />
            <span>MyBucket</span>
          </Link>

          {/* 통계 아이콘 */}
          <Link
            to="/stats"
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <BarChart3 className="h-6 w-6 text-gray-700" />
          </Link>
        </div>
      </div>
    </header>
  )
}
