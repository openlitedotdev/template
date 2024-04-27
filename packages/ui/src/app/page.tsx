import { ProductList } from '@/components/product-list'
import Offers from '@/components/offers'
import ProductsByScores from '@/components/products-by-scores'
import Banners from '@/components/banners'
import HeroVideo from '@/components/hero-video'
import CarouselProduct from '@/components/carousel'

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
    </>
  )
}
