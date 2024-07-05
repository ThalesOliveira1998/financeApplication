'use client'

import { StatusModel } from '@/model/Status'
import { InputHTMLAttributes } from 'react'

export interface SelectStatusProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  records: StatusModel[]
}

export default function SelectStatus(props: SelectStatusProps) {
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
