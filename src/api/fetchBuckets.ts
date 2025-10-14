import { BucketType, CreateBucketType } from '@/types/bucket'
import { supabase } from '../lib/supabase'

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
  const { data, error } = await supabase
    .from('buckets')
    .insert(bucket)
    .select()
  if (error) throw error
  return data
}

export async function updateBucket(updatedBucket: BucketType) {
  const { data, error } = await supabase
    .from('buckets')
    .update(updatedBucket)
    .eq('id', updatedBucket.id)
    .select()
  if (error) throw error
  return data
}

export async function deleteBucket(id: string) {
  const { error } = await supabase
    .from('buckets')
    .delete()
    .eq('id', id)
  if (error) throw error
}