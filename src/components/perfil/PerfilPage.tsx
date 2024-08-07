'use client'

import { UserModel } from '@/model/User'
import { useState, useTransition } from 'react'
import Titulo from '../template/Titulo'
import { IconUser } from '@tabler/icons-react'
import { UserUpdateAction } from '@/actions/userAction'
import { useForm } from 'react-hook-form'
import { updateSchema } from '@/lib/userZodSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export interface UserPageProps {
  user: UserModel
}

export default function PerfilPage({ user }: UserPageProps) {
  //console.log(user)
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      id: user.id,
      email: user.email,
      senha: '',
      nome_completo: user.nome_completo
    }
  })

  async function onSubmit(values: z.infer<typeof updateSchema>) {
    setError(null)
    //console.log('FORM', values)
    startTransition(async () => {
      const response = await UserUpdateAction(values)
      if (response.error) {
        setError(response.error)
      } else {
        router.push('/records')
      }
    })
  }

  return (
    <>
      <Titulo
        icone={IconUser}
        principal="Usuário"
        secundario="Dados cadastrais"
        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#999' }}
      />

      <div className="flex flex-col gap-2 text-gray-500">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
      </div>
    </>
  )
}
