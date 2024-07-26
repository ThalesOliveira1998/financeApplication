'use server'

import { FinancaModel } from '@/model/Financa'
import FinancaRepository from './FinancaRepository'
//import ControllerDB from '..'
import { auth } from '@/lib/auth'

export default async function FinancaSave(record: Partial<FinancaModel>) {
  if (!record.id) {
    const session = await auth()
    //const user = await ControllerDB.user.getFirst()
    const newRecord = {
      ...record,
      // id_usuario: record.id_usuario ?? user.id
      id_usuario: session?.user.id // record.id_usuario ?? user.id
    }
    console.log(newRecord)
    return FinancaRepository.create(newRecord as FinancaModel)
  } else {
    return FinancaRepository.update(record as FinancaModel)
  }
}
