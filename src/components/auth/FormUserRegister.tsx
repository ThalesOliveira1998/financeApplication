'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { registerSchema } from '@/lib/userZodSchema'
import { UserRegisterAction } from '@/actions/authAction'
import Titulo from '../template/Titulo'
import Link from 'next/link'

const FormUserRegister = () => {
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      senha: '',
      nome_completo: ''
    }
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null)
    startTransition(async () => {
      const response = await UserRegisterAction(values)
      if (response.error) {
        setError(response.error)
      } else {
        router.push('/records')
      }
    })
  }

  return (
    <div className="container py-40 relative flex-col items-center justify-center max-w-[450px]">
      <Titulo
        principal="Usuários"
        secundario="Cadastro de novo usuário"
        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#999' }}
      />
      <div className="flex flex-col gap-2 text-gray-500">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nome_completo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nome"
                      type="text"
                      {...field}
                      className=" text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      type="email"
                      {...field}
                      className=" text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="senha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="senha"
                      type="password"
                      {...field}
                      className=" text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <FormMessage>{error}</FormMessage>}
            <Button type="submit" disabled={isPending}>
              Submit
            </Button>
          </form>
        </Form>
        <div className="mt-5 space-y-4">
          Já possui uma conta?{' '}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FormUserRegister
