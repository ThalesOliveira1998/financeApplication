'use server'

import ControllerDB from '@/controller'
import bcrypt from 'bcryptjs'
import { updateSchema } from '@/lib/userZodSchema'
import { z } from 'zod'

export const UserUpdateAction = async (
  values: z.infer<typeof updateSchema>
) => {
  try {
    //console.log('UserAction', values)
    const { data, success } = updateSchema.safeParse(values)
    if (!success) {
      return {
        error: 'Dados inválidos'
      }
    }

    // // verificar se usuario já existe
    const user = await ControllerDB.user.getById(data.id)
    if (!user) {
      return {
        error: 'Usuário não localizado'
      }
    }
    //console.log('BANCO', user)

    // // criptografar a senha
    const passwordHash = await bcrypt.hash(data.senha, 10)

    // // criar o usuário
    await ControllerDB.user.save({
      id: data.id,
      email: data.email,
      nome_completo: data.nome_completo,
      senha: passwordHash
    })

    return { success: true }
  } catch (error) {
    //console.log(error)
    return { error: 'Erro ao atualizar registro' }
  }
}
