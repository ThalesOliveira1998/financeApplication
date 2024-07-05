'use server'

import { FinancaModel } from '@/model/Financa'
import FinancaRepository from './FinancaRepository'
import Controller from '..'

export default async function FinancaSave(record: Partial<FinancaModel>) {
  if (!record.id) {
    const user = await Controller.user.getFirst()
    const newRecord = {
      ...record,
      id_usuario: record.id_usuario ?? user.id
    }
    console.log(newRecord)
    return FinancaRepository.create(newRecord as FinancaModel)
  } else {
    return FinancaRepository.update(record as FinancaModel)
  }
}
