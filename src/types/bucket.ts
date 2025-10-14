export type BucketType = {
  id: string
  title: string
  description: string
  is_completed: boolean
  created_at: string
  updated_at?: string
  completed_at?: string
  complete_note?: string
  complete_image?: string[]
  category?: string
  due_date?: string
  complete_count?: number
  user_id?: string
}

export type CreateBucketType = Omit<BucketType, 'id' | 'created_at' | 'is_completed'>