'use client'

import Controller from '@/controller'
import FinancasList from '@/components/financa/FinancasList'
import Titulo from '@/components/template/Titulo'
import { FinancaModel } from '@/model/Financa'
import { IconCoin, IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import FinancaForm from '@/components/financa/FinancaForm'
import { StatusModel } from '@/model/Status'
import { TiposModel } from '@/model/Tipos'
import Rodape from '@/components/Rodape'
import { IconHeartFilled } from '@tabler/icons-react'
import Logo from './path/to/your/logo.svg'

export default function Page() {
  const [financas, setFinancas] = useState<FinancaModel[]>([])
  const [statusList, setstatusList] = useState<StatusModel[]>([])
  const [tiposList, setTiposList] = useState<TiposModel[]>([])

  const [record, setRecord] = useState<Partial<FinancaModel> | null>(null)

  useEffect(() => {
    Controller.financa.getAll().then(setFinancas)
    Controller.status.getAll().then(setstatusList)
    Controller.tipo.getAll().then(setTiposList)
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

  // console.log(statusList)
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
