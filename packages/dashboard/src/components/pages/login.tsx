import { Button, Input, Label } from '@openui-org/react'
import { LockKeyhole, Mail, RotateCcw } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { Admin, Login as LoginType, Response } from 'types'
import { toast } from 'sonner'
import { useLocation } from 'wouter'
import { useAxios, useRole } from '@/hooks'
import { useLoading } from '@/stores/use-loading'
import { useAdmin } from '@/stores/use-admin'

interface FormData {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>()
  const axios = useAxios()
  const loading = useLoading()
  const admin = useAdmin()
  const [_, setLocation] = useLocation()

  const onSubmit = handleSubmit(async (data) => {
    try {
      loading.setLoad(true)
      const res = await axios.post<Response<LoginType>>('/auth/login', data)
      const db = res.data.db
      const access = db.at(0)

      if (access) {
        const user = await axios.get<Response<Admin>>(`/auth/user-by-id/${access.id_user}`)
        const db = user.data.db.at(0)

        useRole(db!.role as string)

        admin.onLogged(db!)
      }
    }
    catch (error) {
      toast.error('You aren"t an admin', { description: (error as Error).message })
    }
    finally {
      loading.setLoad(false)
      setLocation('/')
    }
  })

  return (
    <>
      <section className="w-full h-screen">

        <div className="flex justify-center border rounded-md h-full">
          <div className="hidden relative pb-16 w-1/2 lg:flex items-center justify-center flex-col bg-muted">
            <h2 className="text-5xl font-bold min-w-max">Dashboard</h2>
            <p className="absolute px-16 bottom-10 text-base">
              Acme Inc
              “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
              <span className="block pt-4">Sofia Davis</span>
            </p>
          </div>
          <div className="w-11/12 lg:w-1/2 flex flex-col items-center lg:border-l px-10 md:px-2 pb-14 pt-40">
            <h2 className="w-full text-center font-bold text-2xl">Login an account</h2>
            <p className="text-center py-3">Enter your email below to login your account</p>
            <form className="md:pt-10 md:px-6 w-10/12" onSubmit={onSubmit}>
              <Label>Email</Label>
              <div className="relative mb-4 py-0.5">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-2" />
                <Input {...register('email')} type="text" placeholder="Jhondao@gmail.com" className="pl-10" />
              </div>
              <Label>Password</Label>
              <div className="relative py-0.5">
                <LockKeyhole className="absolute top-1/2 -translate-y-1/2 left-2" />
                <Input {...register('password')} type="password" placeholder="Enter your password" className="pl-10" />
              </div>
              <div className="py-5">
                <Button
                  disabled={loading.load}
                  className={`w-full font-semibold ${loading.load ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <RotateCcw className={`mr-2 size-6 animate-spin ${loading.load ? 'inline-block' : 'hidden'}`} />
                  Login
                </Button>
              </div>
            </form>
            <p className="w-10/12 lg:w-8/12 m-auto text-center text-sm sm:text-base px-5">
              By clicking continue, you agree to our
              <a href="#" target="_blank" className="underline px-1">Terms of Service</a>
              and
              <a href="#" target="_blank" className="underline pl-1">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
