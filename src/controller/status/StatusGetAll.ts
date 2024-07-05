'use server'

import StatusRepository from './StatusRepository'

export default async function StatusGetAll() {
  return StatusRepository.getAll()
}
