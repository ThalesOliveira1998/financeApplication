import ControllerDB from '@/controller'

export default async function Teste() {
  const dadosx = await ControllerDB.financa.getAll()

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
