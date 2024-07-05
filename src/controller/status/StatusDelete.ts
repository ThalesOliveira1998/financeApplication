'use server'

import StatusRepository from './StatusRepository'

export default async function StatusDelete(id: string) {
  return StatusRepository.delete(id)
}
