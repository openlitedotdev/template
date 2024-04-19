import { Button } from '@openui-org/react/components'

export default function HeroVideo() {
  return (
    <section className="relative text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">Chill Collection</h2>
        <h4 className="text-2xl">Premium comfort for any season</h4>
        <Button className="w-80 text-lg" variant="secondary">Shop now</Button>
      </div>
      <video muted autoPlay loop className="opacity-90">
        <source src="/demo-commerce.webm" type="video/webm" />
        <source src="/demo-commerce.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
