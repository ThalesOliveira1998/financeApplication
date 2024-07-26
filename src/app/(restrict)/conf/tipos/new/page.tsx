import TiposForm from '@/components/TiposForm'

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-999 py-10">
      <div className="container mx-auto px-4 sm:px-5 lg:px-8">
        <h1 className="mb-1 text-4xl font-extrabold text-center text-white">
          Tipo - Novo Registro
        </h1>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 max-w-sm mx-auto">
          <TiposForm />
        </div>
      </div>
    </section>
  )
}
