import { createFileRoute } from '@tanstack/react-router'
import { Button, Input } from '@openui-org/react'
import { LockKeyhole, Mail } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section className="w-full">
        <div className="flex justify-center border border-slater-500/80 rounded-md">
          <div className="hidden relative pb-16 w-1/2 bg-slate-500/10 lg:flex items-center justify-center">
            <h2 className="text-5xl font-bold min-w-max">Dashboard</h2>
            <p className="absolute px-16 bottom-10 text-base">
              Acme Inc
              “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
              <span className="block pt-4">Sofia Davis</span>
            </p>
          </div>
          <div className="w-11/12 lg:w-1/2 flex flex-col items-center lg:border-l border-slater-500/80 px-10 md:px-2 py-16">
            <h2 className="w-full text-center font-bold text-2xl">Login an account</h2>
            <p className="text-[#a1a1aa] text-center py-6">Enter your email below to create your account</p>
            <form className="md:py-10 md:px-6 text-slate-500/80 w-10/12">
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
              <div className="py-6">
                <Button className="w-full font-semibold">Login</Button>
              </div>
            </form>
            <p className="w-10/12 lg:w-8/12 m-auto text-center text-sm sm:text-base px-5 text-[#a1a1aa]">
              By clicking continue, you agree to our
              <a href="#" className="hover:text-white underline px-1">Terms of Service</a>
              and
              <a href="#" className="hover:text-white underline pl-1">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
