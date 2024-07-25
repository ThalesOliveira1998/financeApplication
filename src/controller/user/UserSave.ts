'use server'

import { UserModel } from '@/model/User'
import UserRepository from './UserRepository'

export default async function UserSave(record: Partial<UserModel>) {
  if (!record.id) {
    return UserRepository.create(record as UserModel)
  } else {
    return UserRepository.update(record as UserModel)
  }
}
