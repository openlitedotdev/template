import Link from 'next/link'
import { ProductList } from '@/components/product-list'
import { Product } from '@/components/product'

const mockProduct = {
  name: '',
  price: '',
  description: '',
  URL: '/t-shirt-1.avif',
}

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 mt-4">
        <div className="md:col-span-4 md:row-span-2">

          <Product product={mockProduct} />

        </div>
        <div className="md:col-span-2 md:row-span-1">
          <Product product={{ ...mockProduct, URL: '/product-test.webp' }} />
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <Product product={mockProduct} />
        </div>
      </section>
      <section className="mx-auto max-w-screen-2xl p-6">
        <h2 className="sr-only">Product list</h2>
        <ProductList />
      </section>
    </>
  )
}
