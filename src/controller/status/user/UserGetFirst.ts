'use server'

import UserRepository from './UserRepository'

export default async function UserGetFirst() {
  return UserRepository.getFirst()
}
