import { createFileRoute } from '@tanstack/react-router'
import { Button, Input } from '@openui-org/react'
import { LockKeyhole, Mail } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section className="p-10">
        <div className="flex justify-center border border-slater-500/80 rounded-md">
          <div className="hidden w-1/2 bg-slate-500/10 lg:flex items-center justify-center">
            <h2 className="text-5xl font-bold min-w-max">Dashboard</h2>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center border-l border-slater-500/80 px-10 py-12">
            <h2 className="w-full text-center font-bold text-2xl">Login an account</h2>
            <p className="text-[#a1a1aa] text-center py-3">Enter your email below to create your account</p>
            <form className="md:py-10 md:px-14 text-slate-500/80 w-10/12">
              <label>Email</label>
              <div className="relative mb-4">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-2" />
                <Input type="text" placeholder="Jhondao@gmail.com" className="pl-10" />
              </div>
              <label>Password</label>
              <div className="relative">
                <LockKeyhole className="absolute top-1/2 -translate-y-1/2 left-2" />
                <Input type="password" placeholder="Enter your password" className="pl-10" />
              </div>
              <div className="py-4">
                <Button className="w-full font-semibold">Login</Button>
              </div>
            </form>
            <p className="md:px-20 text-center">By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </section>
      <footer className="w-full bg-dark-900 p-4 bottom-0 sm:absolute md:relative">
        <p className="text-sad">
          @copyrigth - Todos los derechos reservado
        </p>
      </footer>
    </>
  )
}
