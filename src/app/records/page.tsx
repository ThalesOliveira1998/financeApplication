'use client'

import Controller from '@/controller'
import FinancasList from '@/components/financa/FinancasList'
import Titulo from '@/components/template/Titulo'
import { FinancaModel } from '@/model/Financa'
import { IconCoin, IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import FinancaForm from '@/components/financa/FinancaForm'

export default function Page() {
  const [financas, setFinancas] = useState<FinancaModel[]>([])
  const [record, setRecord] = useState<Partial<FinancaModel> | null>(null)

  useEffect(() => {
    Controller.financa.getAll().then(setFinancas)
  }, [])

  async function salvar() {
    if (!record) return

    await Controller.financa.save(record)
    const dados = await Controller.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  async function excluir() {
    if (!record || !record.id) return

    await Controller.financa.delete(record.id!)
    const dados = await Controller.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  return (
    <>
      <Titulo
        icone={IconCoin}
        principal="Registros"
        secundario="Listagem de registros"
      />

      {record ? (
        <FinancaForm
          record={record}
          onChange={setRecord}
          salvar={salvar}
          cancelar={() => setRecord(null)}
          excluir={excluir}
        />
      ) : (
        <>
          <div className="flex justify-end pb-4">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => setRecord({})}
            >
              <IconPlus />
              Novo
            </button>
          </div>
          <FinancasList records={financas} onClick={setRecord} />
        </>
      )}
    </>
  )
}
