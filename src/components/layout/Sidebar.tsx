import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Circle,
  CheckCircle2,
  BarChart3,
  Plus,
  Tag,
  Calendar,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

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

interface SidebarProps {
  currentPath?: string
}

export function Sidebar({ currentPath = '/' }: SidebarProps) {
  const mainNavItems = [
    {
      path: '/empty',
      label: '미완료 버킷',
      icon: Circle,
      count: 12,
    },
    {
      path: '/filled',
      label: '완료 버킷',
      icon: CheckCircle2,
      count: 8,
    },
    {
      path: '/stats',
      label: '통계',
      icon: BarChart3,
    },
  ]

  const quickActions = [
    {
      path: '/add',
      label: '새 목표 추가',
      icon: Plus,
    },
    {
      path: '/deadlines',
      label: '마감일 임박',
      icon: Calendar,
      count: 3,
    },
  ]

  return (
    <div className="w-64 border-r border-gray-200 bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">메뉴</h2>

        {/* Main Navigation */}
        <nav className="space-y-1 mb-6">
          {mainNavItems.map(item => {
            const Icon = item.icon
            const isActive = currentPath === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>
                {item.count && (
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-xs',
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    )}
                  >
                    {item.count}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">빠른 작업</h3>
          <div className="space-y-1">
            {quickActions.map(item => {
              const Icon = item.icon
              const isActive = currentPath === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors',
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                  {item.count && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-100 text-yellow-800">
                      {item.count}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">카테고리</h3>
          <ScrollArea className="h-48">
            <div className="space-y-1">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-gray-600 hover:text-gray-900"
                >
                  <Tag className="h-3 w-3 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
