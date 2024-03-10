import { createFileRoute } from '@tanstack/react-router'
import { LockKeyhole, Mail } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  return (
    <>
      <section
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-24">
          <figure className="hidden xl:block">
            <img src="/png/hero.png" alt="logo-image" />
          </figure>
          <form
            className="relative h-auto w-full border border-[#E4E7E9] rounded-[20px] p-[20px] shadow-md sm:h-[616px] sm:w-[613px] sm:p-[40px]"
            action=""
          >
            <h2 className="text-2xl font-bold text-sad">Commerce</h2>
            <h3 className="text-[24px] text-sad font-bold">Login</h3>
            <div className="flex flex-col">
              <label className="margin-label text-sad">Email</label>
              <div
                className="transform text-sad -translate-y-1/2"
                position="absolute left-[35px] top-[182px]"
                sm="left-[55px] top-[202px]"
              >
                <Mail />
              </div>
              <input
                className="input-border h-[44px]"
                id="email"
                type="email"
                placeholder="jhondoe@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="margin-label text-sad">Password</label>
              <div
                className="transform text-sad -translate-y-1/2"
                position="absolute left-[35px] top-[182px]"
                sm="left-[55px] top-[202px]"
              >
                <LockKeyhole />
              </div>
              <input
                className="input-border h-[44px]"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <p className="mb-[15px] mt-[15px] text-center text-base text-[#3858D6] font-semibold">
              Forgot password?
            </p>
            <button
              className="m-auto block h-[44px] w-full rounded-[8px] bg-[#3858D6] text-white font-bold"
              sm="w-[535px]"
            >
              Login
            </button>
          </form>
        </div>
      </section>
      <footer className="mt w-full bg-black py-4">
        <p className="text-sad">
          @copyrigth - Todos los derechos reservado
        </p>
      </footer>
    </>
  )
}
