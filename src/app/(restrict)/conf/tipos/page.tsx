import Titulo from '@/components/template/Titulo'
import { Button } from '@/components/ui/button'
import { prismaDB } from '@/lib/prisma'
import { IconStatusChange } from '@tabler/icons-react'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
async function Home() {
  revalidatePath('/tipos')
  const dataTipos = await prismaDB.tipo_Financa.findMany()

  return (
    <>
      <Titulo
        icone={IconStatusChange}
        principal="Tipos"
        secundario="tipos de registros financeiros"
        className="text-white"
      />
      <div className=" min-h-screen py-10 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-800 shadow-md rounded-lg p-6 text-white">
            <div className="flex mb-4">
              <div className="flex-1 font-bold bg-gray-700 text-white p-2 rounded">
                Lista de tipos de registros financeiros
              </div>
            </div>

            {dataTipos.map((registro) => (
              <div key={registro.id} className="mb-2">
                <div className="flex border-b border-gray-600 py-2">
                  <div className="flex-1">{registro.nome}</div>
                  <div className="flex-none text-right">
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Action
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
