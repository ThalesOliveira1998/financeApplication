'use client'

import { TiposModel } from '@/model/Tipos'
import { InputHTMLAttributes } from 'react'

export interface SelectTipoProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  records: TiposModel[]
}

export default function SelectTipo(props: SelectTipoProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{props.label}</label>
      <select
        {...props}
        className="bg-zinc-800 text-white p-2 rounded-md outline-none"
      >
        <option value=""></option>
        {props.records.map((row) => {
          return (
            <option key={row.id} value={row.id}>
              {row.nome}
            </option>
          )
        })}
      </select>
    </div>
  )
}
