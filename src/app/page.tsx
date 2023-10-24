'use client'
import { useEffect, useState } from 'react'
import { Palette } from '@/components/Palette'
import { useFetch } from '@/hooks/useFetch'
import '@/styles/loading.css'

const URL = process.env.NEXT_PUBLIC_URL as string

export default function Home () {
  const [page, setPage] = useState(1)
  const { colors, isLoading, getColors } = useFetch(URL, page)

  useEffect(() => {
    getColors()
  }, [page])

  const handleIncrement = () => {
    if (page === 3) return
    setPage(page + 1)
  }

  const handleDecrease = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <div className='section rounded-t-lg ps-5'>
        <h2 className='my-5 font-muli font-semibold'>Paleta de colores</h2>
      </div>

      <section>
        {
        isLoading
          ? <span className='loader'></span>
          : <Palette colors={colors} />
        }
      </section>

      <div className='section grid grid-cols-2'>

        <button className='py-5 bg-violet-500 hover:bg-violet-400 rounded-bl-lg' onClick={() => { handleDecrease() }}>Atrás</button>
        <button className='py-5 bg-violet-500 hover:bg-violet-400 rounded-br-lg' onClick={() => { handleIncrement() }}>Siguiente</button>
      </div>

    </main>
  )
}
