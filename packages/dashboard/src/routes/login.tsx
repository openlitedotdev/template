import { createFileRoute } from '@tanstack/react-router'
import { LockKeyhole, Mail } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section
        className="flex-and-col items-center justify-center md:p-10 w-full"
      >
        <div className="flex w-full items-center ">
          <figure className="hidden lg:block w-1/2">
            <img src="/png/hero.png" alt="logo-image" />
          </figure>
          <form
            className="relative flex-and-col justify-center gap-7 md:justify-evenly w-full lg:w-50% border border-[#E4E7E9] rounded-md shadow-md p-5 md:p-20 lg:min-h-screen"
          >
            <h2 className="text-2xl text-center font-bold text-sad">Commerce</h2>
            <h3 className="text-2xl text-center text-sad font-bold">Login</h3>
            <figure>
              <label className="text-sad">Email</label>
              <div className="flex-and-col text-sad relative">
                <input
                  className="input-border"
                  id="email"
                  type="email"
                  placeholder="jhondoe@gmail.com"
                />
                <Mail className="position-icons" />
              </div>
            </figure>
            <figure>
              <label className="text-sad">Password</label>
              <div className="flex-and-col text-sad relative">
                <input
                  className="input-border"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <LockKeyhole className="position-icons" />
              </div>
            </figure>
            <p className="text-center text-base text-[#3858D6] font-semibold">
              Forgot password?
            </p>
            <button
              className="w-full rounded-md py-2 bg-[#3858D6] text-white font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </section>
      <footer className="w-full bg-black py-4 bottom-0 sm:absolute md:relative">
        <p className="text-sad">
          @copyrigth - Todos los derechos reservado
        </p>
      </footer>
    </>
  )
}
