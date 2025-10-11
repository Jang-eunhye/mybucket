/**
 * Label 컴포넌트
 *
 * 폼 필드의 라벨(제목)을 표시합니다.
 *
 * 사용 예시:
 * <Label htmlFor="email">이메일</Label>
 * <Input id="email" />
 */

import * as React from 'react'

import { cn } from '@/lib/utils'

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
))
Label.displayName = 'Label'

export { Label }
