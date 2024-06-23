import { Button } from '@openlabs/ui'

export default function HeroVideo() {
  return (
    <section className="relative text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 text-center">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold">Chill Collection</h2>
        <h4 className="text-xl md:text-2xl">Premium comfort for any season</h4>
        <Button className="w-72 md:w-80 text-lg" color="secondary">Shop now</Button>
      </div>
      <video poster="/Homepage-Model-Y-Desktop-Global.avif" muted autoPlay loop playsInline className="opacity-90 aspect-video object-cover w-full h-52 sm:h-full">
        <source src="/demo-commerce.webm" type="video/webm" />
        <source src="/demo-commerce.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
