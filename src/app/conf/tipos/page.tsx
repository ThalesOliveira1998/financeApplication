import Titulo from '@/components/template/Titulo'
import { IconBoxMultiple } from '@tabler/icons-react'

export default async function Home() {
  return (
    <>
      <Titulo
        icone={IconBoxMultiple}
        principal="Tipos"
        secundario="tipos de registros do sistemas"
      />
      <div>tipos</div>
    </>
  )
}
