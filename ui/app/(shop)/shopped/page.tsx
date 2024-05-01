import Offers from '@components/pricing/offers'
import Banners from '@components/banners'
import HeroVideo from '@components/hero-video'
import CarouselProduct from '@components/carousel'
import BannerSecond from '@components/banners-second'
import ProductsByScores from '@/components/pricing/products-by-scores'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Offers />
      <Banners />
      <ProductsByScores />
      <section className="mx-auto p-6">
        <CarouselProduct />
      </section>
      <BannerSecond />
    </>
  )
}
