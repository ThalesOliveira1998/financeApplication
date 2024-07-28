'use client'

import React, { useEffect, useState } from 'react'
import ControllerDB from '@/controller'
import FinancasList from '@/components/financa/FinancasList'
import Titulo from '@/components/template/Titulo'
import { FinancaModel } from '@/model/Financa'
import { IconCoin, IconPlus } from '@tabler/icons-react'
import FinancaForm from '@/components/financa/FinancaForm'
import { StatusModel } from '@/model/Status'
import { TiposModel } from '@/model/Tipos'

export interface FinancasPageProps {
  statusList: StatusModel[]
  tiposList: TiposModel[]
}

export default function FinancasPage(props: FinancasPageProps) {
  const [financas, setFinancas] = useState<FinancaModel[]>([])
  const [statusList, setStatusList] = useState<StatusModel[]>([])
  const [tiposList, setTiposList] = useState<TiposModel[]>([])
  const [record, setRecord] = useState<Partial<FinancaModel> | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string>('')

  useEffect(() => {
    setStatusList(props.statusList)
    setTiposList(props.tiposList)
    ControllerDB.financa.getAll().then(setFinancas)
  }, [props.statusList, props.tiposList])

  async function salvar() {
    if (!record) return

    await ControllerDB.financa.save(record)
    const dados = await ControllerDB.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  async function excluir() {
    if (!record || !record.id) return

    await ControllerDB.financa.delete(record.id)
    const dados = await ControllerDB.financa.getAll()
    setFinancas(dados)
    setRecord(null)
  }

  const filteredFinancas = selectedStatus
    ? financas.filter((financa) => financa.id_status === selectedStatus)
    : financas

  return (
    <>
      <Titulo
        icone={IconCoin}
        principal="Registros"
        secundario="Listagem de registros"
        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#999' }}
      />

      <div className="pb-4 flex items-center gap-4">
        <label
          htmlFor="statusFilter"
          className="block text-sm font-medium text-gray-700"
        >
          Filtrar por Status:
        </label>
        <select
          id="statusFilter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="block w-48 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Todos</option>
          {statusList.map((status) => (
            <option key={status.id} value={status.id}>
              {status.nome}
            </option>
          ))}
        </select>
      </div>

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
              className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-lg text-white hover:bg-purple-600"
              onClick={() => setRecord({})}
            >
              <IconPlus className="text-white" />
              Novo Registro
            </button>
          </div>

          <FinancasList
            records={filteredFinancas}
            statusList={statusList}
            tiposList={tiposList}
            onClick={setRecord}
          />
        </>
      )}
    </>
  )
}
