'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui'
import Carousel from './carousel'
import { newest } from '@/utils/const'

export default function CaruselIphones() {
  return (
    <section className="max-w-7xl mx-auto mt-10 py-10">
      <Carousel className="flex gap-5 md:gap-4" buttons>
        {newest.map((data, index) => (
          <Link
            href="/"
            key={index}
            className="shrink-0 snap-start hover:opacity-90 text-center rounded-xl transition-transform ease-in-out duration-500 flex flex-col
              items-center "
          >
            <div className="rounded-xl p-2 flex w-auto">
              <Image
                src={data.src}
                alt={`Imagen de ${data.name}`}
                className="size-44 object-contain"
              />
            </div>
            <span className="text-[#BF4800] text-xs font-bold mt-2">New</span>
            <div className="flex justify-between items-center gap-10 mt-2 mb-4 ">
              <h3 className="text-sm font-bold ">{data.name}</h3>
              <p className="text-xs font-semibold ">{data.price}</p>
            </div>
            <Button className="px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl">
              Buy
            </Button>
          </Link>
        ))}
      </Carousel>
    </section>
  )
}
