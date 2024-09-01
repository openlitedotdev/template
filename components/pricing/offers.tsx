import { Product } from './product'

const mockProduct = {
  name: 'product-1',
  price: '$10.00',
  description: 'A product example',
  URL: '/t-shirt-1.avif',
}

export default function Offers() {
  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 mt-4">
      <div className="md:col-span-4 md:row-span-2">

        <Product product={mockProduct} />

      </div>
      <div className="md:col-span-2 md:row-span-1">
        <Product product={{ ...mockProduct, URL: '/demo-image.avif' }} />
      </div>
      <div className="md:col-span-2 md:row-span-1">
        <Product product={mockProduct} />
      </div>
    </section>
  )
}
