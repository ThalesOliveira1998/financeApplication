import DashboardCard from '@/components/dashboard/DashboardCard'
import Link from 'next/link'
import '@/app/globals.css'
import Image from 'next/image'
import moneyImage from '@/img/money.png'

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${moneyImage.src})` }}
      >
        <section className=" text-center my-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8">
              Bem-vindo à sua plataforma de gerenciamento de registros
              financeiros
            </h2>
          </div>
        </section>

        <section className="mt-8 md:mt-12 lg:mt-16">
          <Link href="/records" legacyBehavior>
            <a className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg md:text-xl lg:text-2xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl hover:opacity-90 transition-opacity transform hover:scale-105">
              Ver todos os registros
            </a>
          </Link>
        </section>

        <section className="mt-4 md:mt-6 lg:mt-8">
          <Link href="/conf" legacyBehavior>
            <a className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg md:text-xl lg:text-2xl py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl hover:opacity-90 transition-opacity transform hover:scale-105">
              Personalizar a aplicação
            </a>
          </Link>
        </section>
      </div>
    </>
  )
}
