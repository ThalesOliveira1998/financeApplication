'use server'

import TipoRepository from './TipoRepository'

export default async function TipoDelete(id: string) {
  return TipoRepository.delete(id)
}
