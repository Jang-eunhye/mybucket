/**
 * Badge 컴포넌트
 *
 * 작은 라벨이나 태그를 표시합니다.
 *
 * 사용 예시:
 * <Badge>기본</Badge>
 * <Badge variant="outline">외곽선</Badge>
 * <Badge variant="destructive">삭제</Badge>
 */

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// 뱃지 스타일 variants
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-blue-600 text-white',
        secondary: 'border-transparent bg-gray-200 text-gray-900',
        destructive: 'border-transparent bg-red-600 text-white',
        outline: 'text-gray-900 border-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
