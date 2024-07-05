import { FinancaModel } from '@/model/Financa'
import InputText from '../InputText'
import { useEffect, useState } from 'react'
import Controller from '@/controller'
import { StatusModel } from '@/model/Status'
import SelectStatus from './SelectStatus'
import { TiposModel } from '@/model/Tipos'
import SelectTipo from './SelectTipo'
import { formatToDate } from '@/lib/Formatter'

export interface FinancaFormProps {
  record: Partial<FinancaModel>
  onChange: (user: Partial<FinancaModel>) => void
  salvar: () => void
  cancelar: () => void
  excluir: () => void
}

export default function FinancaForm(props: FinancaFormProps) {
  const [statusRecords, setstatusRecords] = useState<StatusModel[]>([])
  const [tiposRecords, setTiposRecords] = useState<TiposModel[]>([])

  useEffect(() => {
    Controller.status.getAll().then(setstatusRecords)
    Controller.tipo.getAll().then(setTiposRecords)
    //console.log(statusRecords)
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <InputText
        label="Data"
        type="date"
        value={props.record.data?.toISOString().split('T')[0]}
        id="data"
        name="data"
        onChange={(e) =>
          props.onChange?.({
            ...props.record,
            data: formatToDate(e.target.value)
          })
        }
      />
      <InputText
        label="Descrição"
        type="text"
        value={props.record.descricao ?? ''}
        id="descricao"
        name="descricao"
        onChange={(e) =>
          props.onChange?.({ ...props.record, descricao: e.target.value })
        }
      />
      <InputText
        label="Valor"
        type="text"
        value={props.record.valor ?? ''}
        id="valor"
        name="valor"
        onChange={(e) =>
          props.onChange?.({ ...props.record, valor: parseInt(e.target.value) })
        }
      />
      <SelectStatus
        label="Status"
        records={statusRecords}
        id="id_status"
        name="id_status"
        value={props.record.id_status ?? ''}
        onChange={(e) =>
          props.onChange?.({ ...props.record, id_status: e.target.value })
        }
      />
      <SelectTipo
        label="Tipo do registro"
        records={tiposRecords}
        id="id_tipo_financa"
        name="id_tipo_financa"
        value={props.record.id_tipo_financa ?? ''}
        onChange={(e) =>
          props.onChange?.({ ...props.record, id_tipo_financa: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={props.salvar}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 rounded-md"
            onClick={props.cancelar}
          >
            Cancelar
          </button>
        </div>

        <button
          className="bg-red-500 px-4 py-2 rounded-md"
          onClick={props.excluir}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}
