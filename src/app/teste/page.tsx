import Controller from '@/controller'

export default async function Teste() {
  const dadosx = await Controller.financa.getAll()

  return (
    <>
      <div>{JSON.stringify(dadosx)}</div>

      <div className="flex">
        <div className="p-5 w-full">
          <h1 className="text-2xl">Dashboard</h1>
        </div>
      </div>
    </>
  )
}
