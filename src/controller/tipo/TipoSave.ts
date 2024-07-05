'use server'

import { TiposModel } from '@/model/Tipos'
import TipoRepository from './TipoRepository'

export default async function TipoSave(record: Partial<TiposModel>) {
  if (!record.id) {
    return TipoRepository.create(record as TiposModel)
  } else {
    return TipoRepository.update(record as TiposModel)
  }
}
