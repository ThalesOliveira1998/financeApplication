'use server'

import UserRepository from './UserRepository'

export default async function UserGetById(id: string) {
  return UserRepository.getById(id)
}
