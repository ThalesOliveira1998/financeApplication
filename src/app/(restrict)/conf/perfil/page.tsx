import PerfilPage from '@/components/perfil/PerfilPage'
import ControllerDB from '@/controller'
import { auth } from '@/lib/auth'

export default async function Page() {
  const session = await auth()
  const user = await ControllerDB.user.getById(session?.user!.id)

  return (
    <>
      <PerfilPage user={user} />
    </>
  )
}
