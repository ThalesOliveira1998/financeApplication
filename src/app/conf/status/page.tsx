import { Button } from '@/components/ui/button'
import { prismaDB } from '@/lib/prisma'
import { PencilIcon, TrashIcon } from 'lucide-react'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default async function Home() {
  revalidatePath('/post')
  const dataStatus = await prismaDB.status.findMany()

  return (
    <div>
      <h1 className=" font-bold mb-8 text-3xl ">LISTAGEM DE STATUS</h1>

      <div>
        <div>
          <div className="flex">
            <div className="flex-1 font-bold bg-gray-500 text-white ">
              Descrição
            </div>
          </div>
        </div>

        {dataStatus.map((registro) => (
          <div key={registro.id}>
            <div className="flex border-b border-slate-200 py-1">
              <div className="flex flex-1">{registro.nome}</div>
              <div className="flex flex-none text-right ">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-500"
                  //onClick={() => setEditMode(true)}
                >
                  <PencilIcon size={16} />
                </Button>
                <form>
                  <input type="hidden" name="id" value="id" />
                  <Button variant="ghost" size="sm" className="text-slate-500">
                    <TrashIcon size={16} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid items-center justify-items-center mt-4">
        <Link
          href="status/new"
          className="rounded-lg bg-gray-800 p-4 text-white "
        >
          Novo Registro
        </Link>
      </div>
    </div>
  )
}
