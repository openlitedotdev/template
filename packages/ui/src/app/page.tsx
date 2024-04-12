import { ProductList } from '@/components/product-list'

export default function Home() {
  return (
    <section className="mx-auto max-w-screen-2xl p-6">
      <h2 className="sr-only">Product list</h2>
      <ProductList />
    </section>
  )
}
