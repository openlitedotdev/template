import { ProductList } from '@/components/product-list'
import Offers from '@/components/offers'
import ProductsByScores from '@/components/products-by-scores'
import Banners from '@/components/banners'
import HeroVideo from '@/components/hero-video'

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Offers />
      <Banners />
      <ProductsByScores />
      <section className="mx-auto max-w-screen-2xl p-6">
        <h2 className="sr-only">Product list</h2>
        <ProductList />
      </section>
    </>
  )
}
