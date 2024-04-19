'use client'

import Image from 'next/image'
import { Button } from '@openui-org/react'
import banner from '../../public/banner.webp'

export default function Banners() {
  return (
    <section className="relative flex items-center justify-end inset-0 w-full">
      <Image src={banner} alt="Banner image" className="w-full h-full object-center object-cover block" />
      <div className="absolute right-5 p-6 flex flex-col gap-3 items-center lg:text-white text-center text-black">
        <h2 className="text-4xl font-bold">GOLF CLOTHING</h2>
        <p>NOW AVAILABLE ON PUMA.COM</p>
        <Button variant="secondary">Shop Now</Button>
      </div>
    </section>
  )
}
