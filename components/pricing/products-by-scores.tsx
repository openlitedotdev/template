import { Product } from './product'

const mockProduct = {
  name: 'product-1',
  price: '$100',
  description: 'A product example',
  URL: '/t-shirt-1.avif',
}

export default function ProductsByScores() {
  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 grid-cols-2 mt-4">
      <div className="">
        <Product product={mockProduct} />
      </div>
      <div className="">
        <Product product={mockProduct} />
      </div>
    </section>
  )
}
