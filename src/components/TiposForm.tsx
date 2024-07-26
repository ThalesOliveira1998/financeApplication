'use client'

import { AddFormAction } from '@/actions/tiposFormAction'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

export default function TiposForm() {
  const [insertError, setInsertError] = useState()

  const router = useRouter()

  async function clientAction(formData: FormData) {
    const result = await AddFormAction(formData)
    if (result?.error) {
      setInsertError(result?.error)
      console.log(insertError)
    } else {
      router.push('/conf/tipos/')
    }
  }

  return (
    <section className="flex gap-6">
      <form
        action={clientAction}
        className="flex flex-1 flex-col gap-4 sm:w-1/2"
        key={Math.random()}
      >
        <input
          className="rounded-lg"
          name="name"
          placeholder="nome do tipoe de registro"
        />
        <div className="min-h-6 text-red-500">
          <ul className="flex flex-col gap-y-2">
            {insertError?.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="grid items-center justify-items-center mt-4">
          <SubmitButton />
        </div>
      </form>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="rounded-lg p-4 bg-gray-800 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
