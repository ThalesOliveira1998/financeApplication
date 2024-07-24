import React from 'react'
import logo from '@/img/logo_p.png'
import Image from 'next/image'

export interface RodapeProps {
  principal: string
  secundario: string
  style?: React.CSSProperties
}
export default function Rodape(props: RodapeProps) {
  return (
    <footer style={props.style}>
      <div
        className="
          flex justify-end items-center gap-2 bg-zinc-700 p-4
          text-zinc-400 text-sm
        "
      >
        <Image src={logo} alt="Sistema Financeiro" width={30} />
        {props.principal}
      </div>
    </footer>
  )
}
