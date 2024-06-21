'use server'

import { getErrorMessage } from '@/lib/getErrorMessage'
import { prismaDB } from '../lib/prisma'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const CreatePostSchema = z.object({
  nome: z.string().min(3, 'O nome deve possuir no mínimo 3 caracteres').max(40)
})

export const AddFormAction = async (rawdata: FormData) => {
  try {
    const ValidFormData = CreatePostSchema.safeParse({
      nome: rawdata.get('name')
    })

    if (!ValidFormData.success) {
      return { error: getErrorMessage(ValidFormData.error.issues) }
    }

    await prismaDB.status.create({
      data: ValidFormData.data
    })

    revalidatePath('/config/status/')
  } catch (error) {
    console.log(error)
    return getErrorMessage(error)
  }
}
