import Image from 'next/image'
import bannerApple from 'public/png/banner.png'

export default function Banner() {
  return (
    <>
      <section className="max-w-7xl mx-auto my-8">
        <figure className="px-6">
          <Image
            src={bannerApple}
            alt="Banner apple"
            className="cursor-pointer hover:opacity-90"
          />
        </figure>
      </section>
    </>
  )
}
