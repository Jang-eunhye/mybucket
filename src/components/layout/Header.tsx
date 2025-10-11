import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Search,
  BarChart3,
  Plus,
  Target,
  CheckCircle2,
  Circle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface HeaderProps {
  currentPath?: string
}

export function Header({ currentPath = '/' }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const navItems = [
    {
      path: '/empty',
      label: '비어있는 버킷',
      icon: Circle,
    },
    {
      path: '/filled',
      label: '채워진 버킷',
      icon: CheckCircle2,
    },
    {
      path: '/stats',
      label: '통계',
      icon: BarChart3,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Target className="h-6 w-6 text-blue-600" />
            <span>MyBucket</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => {
              const Icon = item.icon
              const isActive = currentPath === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="버킷리스트 검색..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-64 pl-9"
              />
            </div>

            <Button asChild size="sm">
              <Link to="/add" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">새 목표</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
