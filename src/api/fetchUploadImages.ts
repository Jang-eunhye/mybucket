import { supabase } from '../lib/supabase'
import { sanitizeFileName } from '../utils/fileUtils'

export async function uploadImage(file: File) {
try{
  const safeFileName = sanitizeFileName(file)
  const { data, error } = await supabase.storage
      .from('images')
      .upload(`uploads/${safeFileName}`, file)
    
    if (error) {
      console.error('업로드 오류:', error)
      throw error
    }

    console.log('업로드 성공:', data)

  const { data: publicUrlData } = supabase.storage
    .from('images')
    .getPublicUrl(`uploads/${safeFileName}`)

  const imageUrl = publicUrlData.publicUrl
  console.log('Public URL:', imageUrl)
  return imageUrl
}
  catch (error) {
    console.error('uploadImage 오류:', error)
    throw error
}
}
