'use server'

import TipoRepository from './TipoRepository'

export default async function TipoGetAll() {
  return TipoRepository.getAll()
}
