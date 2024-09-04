'use client'
import Image from 'next/image'
import { Button } from '@openlite/ui'
import banner from '@assets/banner2.webp'

export default function BannerSecond() {
  return (
    <section className="relative flex items-center justify-end inset-0 w-full overflow-hidden">
      <Image
        src={banner}
        alt="Banner image"
        className="w-full h-52 sm:h-full object-center object-cover block"
      />
      <div className="absolute right-0 top-0 bottom-0 left-0 p-2 md:p-6 flex bg-foreground/40 items-center justify-start md:pr-10 text-white">
        <figure className="flex-col gap-3 items-center justify-center flex  text-start">
          <h2 className="w-full text-xl md:text-2xl font-bold">COMING SOON</h2>
          <p className="text-sm w-full">
            A$AP ROCKY x PUMA LAUNCHES
            <br />
            5/3 AT 10 AM EDT
          </p>
          <article className="flex gap-2">
            <Button>EXPLORE THE COLLECTION</Button>
            <Button>SIGN UP FOR ALERTS </Button>
          </article>
        </figure>
      </div>
    </section>
  )
}
