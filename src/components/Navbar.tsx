import logo from '@/img/logo_p.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaDollarSign } from 'react-icons/fa'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import dollarIcon from '@/img/dollar.svg'

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <button className="focus:outline-none">
          <Image
            src={dollarIcon}
            alt="Dollar Icon"
            width="50"
            height="24"
            className="dollar-icon"
          />
        </button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="avatar-gradient-border">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="avatar-style"
            />
            <AvatarFallback className="text-black">Me</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-2 mt-2 border border-gray-100">
          <DropdownMenuLabel className="px-4 py-2 text-gray-700 font-semibold">
            Minha conta
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-t border-gray-200 my-2" />
          <DropdownMenuItem className="dropdown-item-hover px-4 py-2 transition-colors duration-150 ease-in-out ">
            <Link href="/profile">Perfil</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
