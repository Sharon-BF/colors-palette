import { type MappedData } from '@/types.d'
import { useColor } from '@/hooks/useColor'
import NOT_FOUND from '../../public/notFound.png'
import { Color } from './Color'

// The component contains the list of colors of the request
function ListOfColors ({ colors }: { colors: MappedData[] }) {
  const { handleClick, initValues } = useColor()
  return (
    <ul className='palette'>
      {
        colors.map(color => {
          const { id, year, code, pantone } = color
          return (
            <li key={id} className='grid shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-90 duration-150' style={{ backgroundColor: code }} onClick={() => { handleClick(code, id) }}>
              <p className='justify-self-start'>{year}</p>
                <Color color={color} initValues={initValues}/>
              <p className='justify-self-end'>{pantone}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

// The component contains the message when there are no colors
function NoColors () {
  return (
    <div className='flex flex-col items-center'>
      <span className='h-56'>
        <img className='w-56 my-3' src={NOT_FOUND.src} alt="Not Colors" />
      </span>
      <h4 className='my-3'>No results found</h4>
    </div>
  )
}

// Validation to show list of colors
export function Palette ({ colors }: { colors: MappedData[] }) {
  const hasColors = colors?.length > 0
  return (
    hasColors
      ? <ListOfColors colors={colors} />
      : <NoColors />

  )
}
