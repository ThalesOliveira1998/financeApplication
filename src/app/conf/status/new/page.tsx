import StatusForm from '@/components/StatusForm'

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-10 text-3xl font-bold">Status - novo registro</h1>
        <StatusForm />
      </div>
    </section>
  )
}
