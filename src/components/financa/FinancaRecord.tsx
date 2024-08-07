import { currencyFormatter, dataFormatter } from '@/lib/Formatter'
import { FinancaModel } from '@/model/Financa'
import { StatusModel } from '@/model/Status'
import { TiposModel } from '@/model/Tipos'

export interface FinancaRecordProps {
  record: FinancaModel
  status: StatusModel
  tipo: TiposModel
  onClick?: (record: FinancaModel) => void
}

export default function FinancaRecord(props: FinancaRecordProps) {
  //console.log('STATUS:', props)
  return (
    <div
      className="grid grid-cols-5 gap-4 text-white bg-zinc-800 p-3 rounded-md cursor-pointer items-center"
      onClick={() => props.onClick?.(props.record)}
    >
      <div>{dataFormatter(props.record.data)}</div>
      <div>{props.record.descricao}</div>
      <div className="text-right pr-5">
        {currencyFormatter(props.record.valor)}
      </div>
      <div>{props.status.nome}</div>
      <div>{props.tipo.nome}</div>
    </div>
  )
}
