import { Product } from './product'
import { productsMocks } from '@/utils/mocks'

export function ProductList() {
  return (
    <ul
      role="list"
      data-testid="ProductList"
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {productsMocks.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  )
}
