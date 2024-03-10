// checked page

import iphoneIcon from 'public/png/bgInfo.png'
import aboutProfile from 'public/png/about-profile.png'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Network } from '@/components/icons'
import { infoAbout } from '@/utils/const'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'About',
  description: 'About commerce Lynx',
}

export default function About() {
  return (
    <>
      <Navbar
        background="shadow-md shadow-gray-dark"
        textColor="text-gray-dark"
      />
      <section className="px-2 bg-gray min-h-screen mb-6">
        <h2 className="mx-auto   text-6xl font-semibold text-gray-dark pt-32 block text-center">
          About the Lynx.
        </h2>
        <div className="flex items-center justify-center gap-x-8 text-center my-6 w-max mx-auto">
          <figure className=" flex justify-center items-center gap-x-4">
            <Image src={aboutProfile} alt="Teams Lynx cop" />
            <figcaption className="font-semibold  text-gray-dark">
              Feyz ibrahim
            </figcaption>
          </figure>
          <h5 className=" text-gray-dark px-4 py-2 border-l-2 border-gray-dark border-opacity-30">
            20 Septiembre 2023
          </h5>
        </div>
        <h5 className="px-6  max-w-5xl mx-auto text-center    text-gray-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </h5>
        <figure className=" flex justify-center my-6 container mx-auto">
          <Image
            src={iphoneIcon}
            alt="Lynx description tags dev"
            className="border  rounded-2xl w-[80%] h-[50%]"
          />
        </figure>
        <div className="flex  justify-center ">
          <div>
            {infoAbout.map((inf, i) => (
              <article className="px-6 py-10 max-w-5xl mx-auto " key={i}>
                <h2 className=" font-semibold text-gray-dark text-2xl mb-4 text-center">
                  {inf.title}
                </h2>
                <p className=" text-balance font-normal text-gray-dark text-center md:text-left">
                  {inf.content}
                </p>
              </article>
            ))}
          </div>
          <div className=" flex-col hidden md:flex">
            <h6 className="text-gray-dark mt-6">SHARE</h6>
            <Network
              logocolum="flex-col"
              colorfacebook="text-gray-dark"
              bgfacebook="text-gray-dark"
            />
          </div>
        </div>

        <div className=" border m-10 border-black p-6 md:text-justify max-w-6xl mx-auto text-4xl  font-medium leading-[64px] tracking-[1px] text-gray-dark gradient-left-to-right">
          <p className="italic w-full max-w-fit-content  md:p-8">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <p className="md:px-8 italic">
            elit . Curabitur ac ultrices odio.
            &quot;
          </p>
        </div>

        <article className=" flex  flex-col md:gap-11 py-10 max-w-5xl mx-auto">
          <h2 className=" text-center md:text-left font-semibold text-gray-dark text-2xl mb-4">
            Where do we stand now
          </h2>
          <p className=" text-balance text-center md:text-left  font-normal text-gray-dark ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit
          </p>
        </article>
      </section>
    </>
  )
}
