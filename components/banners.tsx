'use client'

import Image from 'next/image'
import { Button } from '@openlite/ui'
import banner from '@assets/banner.webp'

export default function Banners() {
  return (
    <section className="relative flex items-center justify-end inset-0 w-full">
      <Image
        src={banner}
        alt="Banner image"
        className="w-full h-52 sm:h-full object-center object-cover block"
      />
      <div className="absolute right-0 top-0 bottom-0 left-0 p-6 flex bg-foreground/40 items-center justify-center md:justify-end md:pr-10 text-center text-white">
        <figure className="flex-col gap-3 items-center justify-center flex">
          <h2 className="text-xl md:text-4xl font-bold">GOLF CLOTHING</h2>
          <p>NOW AVAILABLE ON PUMA.COM</p>
          <Button>Shop Now</Button>
        </figure>
      </div>
    </section>
  )
}
