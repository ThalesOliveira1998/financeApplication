'use client'

import ControllerDB from '@/controller'
import FinancasList from '@/components/financa/FinancasList'
import Titulo from '@/components/template/Titulo'
import { FinancaModel } from '@/model/Financa'
import { IconCoin, IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import FinancaForm from '@/components/financa/FinancaForm'
import { StatusModel } from '@/model/Status'
import { TiposModel } from '@/model/Tipos'

export interface FinancasPageProps {
  statusList: StatusModel[]
  tiposList: TiposModel[]
}

export default function FinancasPage(props: FinancasPageProps) {
  const [financas, setFinancas] = useState<FinancaModel[]>([])
  const [statusList, setstatusList] = useState<StatusModel[]>([])
  const [tiposList, setTiposList] = useState<TiposModel[]>([])
  const [record, setRecord] = useState<Partial<FinancaModel> | null>(null)

  useEffect(() => {
    setstatusList(props.statusList)
    setTiposList(props.tiposList)
    ControllerDB.financa.getAll().then(setFinancas)
    // ControllerDB.status.getAll().then(setstatusList)
    // ControllerDB.tipo.getAll().then(setTiposList)
  }, [])

  async function salvar() {
    if (!record) return

    await ControllerDB.financa.save(record)
    const dados = await ControllerDB.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  async function excluir() {
    if (!record || !record.id) return

    await ControllerDB.financa.delete(record.id!)
    const dados = await ControllerDB.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  console.log('STATUS page', statusList)
  return (
    <>
      <Titulo
        icone={IconCoin}
        principal="Registros"
        secundario="Listagem de registros"
        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#999' }}
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
              className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-lg text-white"
              onClick={() => setRecord({})}
            >
              <IconPlus className="text-white" />
              Novo Registro
            </button>
          </div>

          <FinancasList
            records={financas}
            statusList={statusList}
            tiposList={tiposList}
            onClick={setRecord}
          />
        </>
      )}
    </>
  )
}
