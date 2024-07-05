import { FinancaModel } from '@/model/Financa'
import FinancaRecord from './FinancaRecord'

export interface FinancasListProps {
  records: FinancaModel[]
  onClick?: (record: FinancaModel) => void
}

export default function FinancasList(props: FinancasListProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {props.records.map((row: FinancaModel) => {
          return (
            <FinancaRecord key={row.id} record={row} onClick={props.onClick} />
          )
        })}
      </div>
    </>
  )
}
