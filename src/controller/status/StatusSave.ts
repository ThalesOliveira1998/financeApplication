'use server'

import { StatusModel } from '@/model/Status'
import StatusRepository from './StatusRepository'

export default async function StatusSave(record: Partial<StatusModel>) {
  if (!record.id) {
    return StatusRepository.create(record as StatusModel)
  } else {
    return StatusRepository.update(record as StatusModel)
  }
  // const registrox = { ...record, id: record.id ?? new Id() }
  // const registro = { ...record }
  // return StatusRepository.save(registro as StatusModel)
}
