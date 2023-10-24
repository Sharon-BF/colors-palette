import { useState } from 'react'
import { fetchColors } from '@/services/colors'
import { type MappedData } from '@/types'

export function useFetch (URL: string, page: number) {
  const [colors, setColors] = useState<MappedData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getColors = async () => {
    const newColors = await fetchColors(URL, page)
    setColors(newColors)
    setIsLoading(false)
  }
  return {
    getColors,
    colors,
    isLoading
  }
}
