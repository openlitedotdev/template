import { createFileRoute } from '@tanstack/react-router'
import { LockKeyhole, Mail } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center md:p-10 text-dark-500"
      >
        <div className="flex w-full items-center ">
          <figure className="hidden md:block w-1/2">
            <img src="/png/hero.png" alt="logo-image" />
          </figure>
          <form
            className="relative flex flex-col justify-center style-border gap-7 md:justify-evenly p-5 md:p-20 w-full md:w-50% lg:min-h-screen"
          >
            <h2 className="text-2xl text-center font-bold">Commerce</h2>
            <h3 className="text-2xl text-center font-bold">Login</h3>
            <figure>
              <label>Email</label>
              <div className="flex flex-col relative">
                <input
                  className="border border-white rounded-md shadow-sm box-border px-10 py-1"
                  id="email"
                  type="email"
                  placeholder="jhondoe@gmail.com"
                />
                <Mail className="absolute top-1/2 transform -translate-y-1/2 left-3" />
              </div>
            </figure>
            <figure>
              <label>Password</label>
              <div className="flex flex-col relative">
                <input
                  className="border border-white rounded-md shadow-sm box-border px-10 py-1"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <LockKeyhole className="absolute top-1/2 transform -translate-y-1/2 left-3" />
              </div>
            </figure>
            <p className="text-center text-base text-blue font-semibold">
              Forgot password?
            </p>
            <button
              className="rounded-md py-2 bg-secondary-500 text-white font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </section>
      <footer className="w-full bg-dark-900 py-4 bottom-0 sm:absolute md:relative">
        <p className="text-sad">
          @copyrigth - Todos los derechos reservado
        </p>
      </footer>
    </>
  )
}
