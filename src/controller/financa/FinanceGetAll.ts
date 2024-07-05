'use server'

import FinancaRepository from './FinancaRepository'

export default async function FinancaGetAll() {
  return FinancaRepository.getAll()
}
