import { ElementType } from 'react'
import NavConfig from '../NavConfig'

export interface TituloProps {
  principal: string
  secundario: string
  icone: ElementType
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-2 pb-2 mb-4 justify-between border-b-4">
      <div className="flex gap-2 ">
        <props.icone size={50} stroke={1} />
        <div>
          <h1 className="text-2xl font-black">{props.principal}</h1>
          <h2 className="text-zinc-400">{props.secundario}</h2>
        </div>
      </div>
      <NavConfig />
    </div>
  )
}
