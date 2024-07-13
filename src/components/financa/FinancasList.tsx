import { FinancaModel } from '@/model/Financa'
import FinancaRecord from './FinancaRecord'
import { StatusModel } from '@/model/Status'
import { TiposModel } from '@/model/Tipos'

export interface FinancasListProps {
  records: FinancaModel[]
  statusList: StatusModel[]
  tiposList: TiposModel[]
  onClick?: (record: FinancaModel) => void
}

export default function FinancasList(props: FinancasListProps) {
  // console.log(props.statusList)
  return (
    <>
      <div className="flex flex-col gap-2">
        {props.records.map((row: FinancaModel) => {
          const statusRecord = props.statusList.find(
            (status) => status.id === row.id_status
          )
          const tipoRecord = props.tiposList.find(
            (tipo) => tipo.id === row.id_tipo_financa
          )

          return (
            <FinancaRecord
              key={row.id}
              record={row}
              status={statusRecord!}
              tipo={tipoRecord!}
              onClick={props.onClick}
            />
          )
        })}
      </div>
    </>
  )
}
