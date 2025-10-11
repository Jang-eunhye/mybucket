/**
 * Button 컴포넌트
 *
 * 다양한 스타일과 크기의 버튼을 제공합니다.
 *
 * 사용 예시:
 * <Button>기본 버튼</Button>
 * <Button variant="outline">외곽선 버튼</Button>
 * <Button size="sm">작은 버튼</Button>
 */

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// 버튼의 스타일 variants 정의
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700', // 파란색 (기본)
        destructive: 'bg-red-600 text-white hover:bg-red-700', // 빨간색 (삭제 등)
        outline: 'border border-gray-300 bg-white hover:bg-gray-100', // 외곽선만
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300', // 회색
        ghost: 'hover:bg-gray-100', // 투명 (호버 시만 배경)
        link: 'text-blue-600 underline-offset-4 hover:underline', // 링크 스타일
      },
      size: {
        default: 'h-10 px-4 py-2', // 보통 크기
        sm: 'h-9 rounded-md px-3', // 작은 크기
        lg: 'h-11 rounded-md px-8', // 큰 크기
        icon: 'h-10 w-10', // 아이콘 전용
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean // true면 버튼 대신 자식 요소로 렌더링 (Link 등에 사용)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
