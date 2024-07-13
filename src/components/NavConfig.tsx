import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
import icon from '@/img/settings.svg'

const NavConfig = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Image src={icon} width={48} height={48} alt="config" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Configurações do sistemas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/conf/status">Status</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/conf/tipos">Tipos</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavConfig
