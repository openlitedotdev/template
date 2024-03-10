import { ImageAuth } from '@/components/icons'
import Navbar from '@/components/navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar
        background="shadow-md shadow-gray-dark "
        textColor="text-gray-dark"
      />
      <section className="w-full  bg-[#F5F5F7] mb-5 mt-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-around p-4">
          <figure className="md:w-[300px] lg:w-[500px] hidden md:flex w-2/5">
            <ImageAuth />
          </figure>
          {children}
        </div>
      </section>
    </>
  )
}
