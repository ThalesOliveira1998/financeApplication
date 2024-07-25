import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prismaDB } from './prisma'
import authConfig from './auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prismaDB),

  ...authConfig,

  session: { strategy: 'jwt' },
  callbacks: {
    // incluir as informações do usuário ao token JWT.
    // incluir o campo acrescentado em types.next-auth.d.ts
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    // Acrescentar as informações na sessão. Acrescentado em types.next-auth.d.ts
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id!
      }
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})
