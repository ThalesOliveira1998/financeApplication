'use server'

import ControllerDB from '@/controller'
import { signIn } from '@/lib/auth'
import { loginSchema, registerSchema } from '@/lib/userZodSchema'
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export const UserLoginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn('credentials', {
      email: values.email,
      senha: values.senha,
      redirect: false
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
    return { error: 'error 500' }
  }
}

export const UserRegisterAction = async (
  values: z.infer<typeof registerSchema>
) => {
  try {
    const { data, success } = registerSchema.safeParse(values)
    if (!success) {
      return {
        error: 'Dados inválidos'
      }
    }

    // verificar se usuario já existe
    const user = await ControllerDB.user.getByEmail(data.email)
    if (user) {
      return {
        error: 'Usuário já cadastrado'
      }
    }

    // criptografar a senha
    const passwordHash = await bcrypt.hash(data.senha, 10)

    // criar o usuário
    await ControllerDB.user.save({
      email: data.email,
      nome_completo: data.nome_completo,
      senha: passwordHash
    })

    await signIn('credentials', {
      email: data.email,
      senha: data.senha,
      redirect: false
    })

    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
    return { error: 'error 500' }
  }
}
