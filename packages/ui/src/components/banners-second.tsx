'use client'
import Image from 'next/image'
import { Button } from '@openui-org/react'
import banner from '../../public/banner2.webp'

export default function BannerSecond() {
  return (
    <section className="relative flex items-center justify-end inset-0 w-full overflow-hidden">
      <Image src={banner} alt="Banner image" className="w-full h-full object-center object-cover block" />
      <div className="absolute left-2 py-4 md:left-5 md:p-6 flex flex-col gap-1 md:gap-3 items-start text-white text-start">
        <h2 className="text-xl md:text-5xl font-bold">COMING SOON</h2>
        <p className="text-xs md:text-xl">
          A$AP ROCKY x PUMA LAUNCHES
          <br />
          5/3 AT 10 AM EDT
        </p>
        <article className="flex gap-2">
          <Button variant="secondary" className="text-xs p-1 md:p-6 md:text-xl">EXPLORE THE COLLECTION</Button>
          <Button variant="secondary" className="text-xs  p-1 md:p-6 md:text-xl">SIGN UP FOR ALERTS </Button>
        </article>
      </div>
    </section>
  )
}
