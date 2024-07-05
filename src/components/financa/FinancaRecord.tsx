import { currencyFormatter, dataFormatter } from '@/lib/Formatter'
import { FinancaModel } from '@/model/Financa'

export interface FinancaRecordProps {
  record: FinancaModel
  onClick?: (record: FinancaModel) => void
}

export default function FinancaRecord(props: FinancaRecordProps) {
  return (
    <div
      className="flex bg-zinc-900 p-3 rounded-md items-center gap-2 cursor-pointer"
      onClick={() => props.onClick?.(props.record)}
    >
      <div className="grid grid-cols-5 gap-4 text-white">
        <div>{dataFormatter(props.record.data)}</div>
        <div>{props.record.descricao}</div>
        <div>{currencyFormatter(props.record.valor)}</div>
        <div>{props.record.id_status}</div>
        <div>{props.record.id_tipo_financa}</div>
      </div>
    </div>
  )
}
