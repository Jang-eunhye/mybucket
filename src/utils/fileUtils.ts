export const sanitizeFileName = (file: File): string => {
  const timestamp = Date.now()
  const extension = file.name.split('.').pop()
  return `${timestamp}.${extension}`
}