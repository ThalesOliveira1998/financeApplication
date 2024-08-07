import { object, string } from 'zod'

export const loginSchema = object({
  email: string({ required_error: 'E-mail é obrigatório' })
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  senha: string({ required_error: 'Senha é obrigatória' })
    .min(1, 'Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
})

export const registerSchema = object({
  email: string({ required_error: 'E-mail é obrigatório' })
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  senha: string({ required_error: 'Senha é obrigatória' })
    .min(1, 'Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(32, 'A senha deve ter no máximo 32 caracteres'),
  nome_completo: string({ required_error: 'Nome é obrigatório' }).min(
    1,
    'Nome é obrigatório'
  )
})

export const updateSchema = object({
  id: string({ required_error: 'Id requerido' }),
  email: string({ required_error: 'E-mail é obrigatório' })
    .min(1, 'E-mail é obrigatório')
    .email('E-mail inválido'),
  senha: string({ required_error: 'Senha é obrigatória' })
    .min(1, 'Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(32, 'A senha deve ter no máximo 32 caracteres'),
  nome_completo: string({ required_error: 'Nome é obrigatório' }).min(
    1,
    'Nome é obrigatório'
  )
})
