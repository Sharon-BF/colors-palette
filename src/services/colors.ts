import { type Data } from '@/types'

export const fetchColors = async (URL: string, page: number) => {
  try {
    const response = await fetch(`${URL}?page=${page}`)
    const json = await response.json()

    const colors: Data[] = json.data

    return colors?.map(color => ({
      id: color.id,
      name: color.name,
      year: color.year,
      code: color.color,
      pantone: color.pantone_value
    }))
  } catch (error) {
    throw new Error('Error fetching colors')
  }
}
