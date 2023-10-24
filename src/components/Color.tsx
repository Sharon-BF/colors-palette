import { type MappedData, type InitValues } from '@/types.d'

export function Color ({ color, initValues }: { color: MappedData, initValues: InitValues }) {
  const { id, name, code } = color
  const { isCopied, idSelect } = initValues
  return (
      <div className='flex flex-col justify-center items-center'>
        {
          isCopied && idSelect === id
            ? <p>¡Copiado!</p>
            : <>
              <p>{name}</p>
              <p>{code}</p>
            </>
        }
      </div>
  )
}
