import { useState } from 'react'
import { type InitValues } from '@/types'

export function useColor () {
  const [initValues, setInitValues] = useState<InitValues>({
    isCopied: false,
    codeSelect: '',
    idSelect: 0
  })

  // Function to copy the color code to the clipboard
  const handleClick = async (code: string, id: number) => {
    try {
      await navigator.clipboard.writeText(code)
      setInitValues({
        isCopied: true,
        codeSelect: code,
        idSelect: id
      })
      setTimeout(() => {
        setInitValues({
          ...initValues,
          isCopied: false
        })
      }, 2000)
    } catch (err) {
      throw new Error('Could not copy color')
    }
  }

  return {
    handleClick,
    initValues
  }
}
