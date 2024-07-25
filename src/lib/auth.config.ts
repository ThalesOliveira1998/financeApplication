import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prismaDB } from './prisma'
import { loginSchema } from './userZodSchema'

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials)
        if (!success) {
          throw new Error('Invalid credentials')
        }

        // verificar se o usuário existe
        const user = await prismaDB.usuario.findUnique({
          where: {
            email: data.email
          }
        })
        if (!user || !user.senha) {
          throw new Error('No user found')
        }

        // verificar se a senha está correta
        const isValid = await bcrypt.compare(data.senha, user.senha)
        if (!isValid) {
          throw new Error('Dados incorretos')
        }

        return user
      }
    })
  ]
} satisfies NextAuthConfig
