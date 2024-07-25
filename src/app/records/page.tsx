import ControllerDB from '@/controller'
import FinancasPage from '@/components/financa/FinancaPage'
// import Logo from './path/to/your/logo.svg'

export default async function Page() {
  const status = await ControllerDB.status.getAll()
  const tipos = await ControllerDB.tipo.getAll()

  //console.log('STATUS page', statusList)
  return (
    <>
      <FinancasPage statusList={status} tiposList={tipos} />
    </>
  )
}
