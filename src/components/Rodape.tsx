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
    <footer className="footer-container" style={props.style}>
      <div className="flex justify-between items-center gap-2 bg-zinc-700 p-4 text-zinc-400 text-sm w-full">
        <Image src={logo} alt="Sistema Financeiro" width={30} height={30} />
        <span>{props.principal}</span>
      </div>
    </footer>
  )
}
