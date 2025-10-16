import { BucketType, CreateBucketType } from '@/types/bucket'
import { supabase } from '../lib/supabase'
import { uploadImage } from './fetchUploadImages'

export async function getAllBuckets() {
  const { data, error } = await supabase
    .from('buckets')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getBucketById(id: string) {
  const { data, error } = await supabase
    .from('buckets')
    .select('*')
    .eq('id', id)
  if (error) throw error
  return data
}

export async function createBucket(bucket: CreateBucketType) {
  const { data, error } = await supabase.from('buckets').insert(bucket).select()
  if (error) throw error
  return data
}

export async function updateBucket(updatedBucket: BucketType) {
  if (
    updatedBucket.complete_images &&
    updatedBucket.complete_images.length > 0
  ) {
    //파일 이미지 필터링
    const fileImages = updatedBucket.complete_images.filter(
      (image): image is File => image instanceof File
    )
    
    // 기존 URL들 (blob URL 제외)
    const existingUrls = updatedBucket.complete_images.filter(
      (image): image is string => 
        typeof image === 'string' && !image.startsWith('blob:')
    )
    
    const newUrls = []
    // 파일이미지 업로드
    for (const image of fileImages) {
      const imageUrl = await uploadImage(image)
      newUrls.push(imageUrl)
    }
    
    // 실제 URL만 모아서 저장
    updatedBucket.complete_images = [...existingUrls, ...newUrls]
  }
  
  // Supabase에 업데이트
  const { error } = await supabase
    .from('buckets')
    .update({
      title: updatedBucket.title,
      description: updatedBucket.description,
      is_completed: updatedBucket.is_completed,
      complete_note: updatedBucket.complete_note,
      complete_images: updatedBucket.complete_images,
    })
    .eq('id', updatedBucket.id)
  
  if (error) throw error
}
    
export async function deleteBucket(id: string) {
  const { error } = await supabase.from('buckets').delete().eq('id', id)
  if (error) throw error
}
