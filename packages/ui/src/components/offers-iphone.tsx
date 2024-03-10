import Image from 'next/image'
import Link from 'next/link'
import FigureIphone from 'public/png/figure.png'
import { Button } from './ui'

export default function OffersIphone() {
  return (
    <section className="bg-black  px-6 relative">
      <div className="flex flex-col items-center  gap-8  ">
        <div className="text-white text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold">Lynx.iphones.</h2>
          <p className="mt-6 text-sm md:text-base">
            From ₹25,000 to ₹10,000,0. Every Model Ever Built
          </p>
        </div>

        <div className="flex md:w-1/3 justify-center  items-center gap-4 mb-10">
          <Button className="px-8 py-2 bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl">
            Buy
          </Button>
          <Link
            href="/"
            className="text-white  bg-[#1c4060] rounded-lg px-4 py-2 hover:px-6  hover:bg-[#2a4054] transition-all duration-500 ease-in-out"
          >
            Learn More...
          </Link>
        </div>
        <Image
          src={FigureIphone}
          alt="Figure Iphone"
          className="object-fill shadow-sm rounded-lg   lg:w-[60.063rem] lg:h-[24.563rem]"
        />
      </div>
    </section>
  )
}
