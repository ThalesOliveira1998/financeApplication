import DashboardCard from '@/components/dashboard/DashboardCard'
import Link from 'next/link'
import '@/app/globals.css'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-5">
        <section className="text-center my-10">
          <h2 className="text-xl text-white text-4xl mb-4">
            Bem vindo a sua plataforma de gerenciamento de registros financeiros
          </h2>
        </section>

        <section className="mt-10">
          <Link href="/records" legacyBehavior>
            <a
              style={{
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                fontSize: '1.rem',
                marginBottom: '1rem',
                padding: '10px',
                borderRadius: '5px'
              }}
            >
              Ver todos os registros
            </a>
          </Link>
        </section>
        <section className="mt-10">
          <Link href="/conf" legacyBehavior>
            <a
              style={{
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                fontSize: '1.rem',
                marginBottom: '1rem',
                padding: '10px',
                borderRadius: '5px'
              }}
            >
              Configurações
            </a>
          </Link>
        </section>
      </div>
    </>
  )
}
