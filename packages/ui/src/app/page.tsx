import { ProductList } from '@/components/product-list'

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl p-8 pb-16">
      <h2 className="sr-only">Product list</h2>
      <ProductList />
    </section>
  )
}
