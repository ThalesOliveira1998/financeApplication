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
import { loginSchema } from '@/lib/userZodSchema'
import { UserLoginAction } from '@/actions/authAction'
import Link from 'next/link'
import Titulo from '../template/Titulo'

const FormLogin = () => {
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      senha: ''
    }
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError(null)
    startTransition(async () => {
      const response = await UserLoginAction(values)
      if (response.error) {
        setError(response.error)
      } else {
        router.push('/records')
      }
    })
  }

  return (
    <div className="container relative py-48 h-[600px] flex-col items-center justify-center max-w-[450px] ">
      <Titulo
        principal="Login"
        secundario=""
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
                  <FormLabel>Password</FormLabel>
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
          Não tem uma conta?{' '}
          <Link href="/register" className="underline">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FormLogin
