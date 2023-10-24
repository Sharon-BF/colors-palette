export interface PaletteColors {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Datum[]
  support: Support
}

export interface Data {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export interface MappedData {
  id: number
  name: string
  year: number
  code: string
  pantone: string
}

export interface Support {
  url: string
  text: string
}

export interface InitValues {
  isCopied: boolean
  codeSelect: string
  idSelect: number
}
