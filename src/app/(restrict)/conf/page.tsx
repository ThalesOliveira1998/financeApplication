import Link from 'next/link'
import Image from 'next/image'
import moneyImage from '@/img/money.png'
import '@/app/globals.css'

const StatusTiposPage = () => {
  return (
    <div>
      <section className="text-center my-10">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 font-bold">
            Bem-vindo à página de Status e Tipos
          </h2>
        </div>
      </section>

      <section className="w-full flex flex-col items-center">
        <Link href="/conf/status/new" legacyBehavior>
          <a className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg md:text-xl lg:text-2xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl hover:opacity-90 transition-opacity transform hover:scale-105 mb-4 md:mb-6 lg:mb-8 text-center">
            Criar tipos de Status
          </a>
        </Link>
        <Link href="/conf/tipos/new" legacyBehavior>
          <a className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg md:text-xl lg:text-2xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl hover:opacity-90 transition-opacity transform hover:scale-105 text-center">
            Criar tipos de registros
          </a>
        </Link>
      </section>
    </div>
  )
}

export default StatusTiposPage
