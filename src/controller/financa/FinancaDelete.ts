'use server'

import FinancaRepository from './FinancaRepository'

export default async function FinancaDelete(id: string) {
  return FinancaRepository.delete(id)
}
