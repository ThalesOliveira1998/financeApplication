'use server'

import UserRepository from './UserRepository'

export default async function UserGetByEmail(email: string) {
  return UserRepository.getByEmail(email)
}
