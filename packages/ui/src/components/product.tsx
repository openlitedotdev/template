import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

interface ProductProps {
  product: {
    name: string
    price: string
    description: string
  }
}

export function Product(props: ProductProps) {
  return (

    <Link href="#" className="group">
      <div className="bg-muted/90 rounded overflow-hidden transition-all duration-500 relative aspect-square">
        <Image
          src="/product-test.webp"
          alt="Image product test"
          className="w-full h-full object-center object-cover absolute block"
          width="400"
          height="400"
          priority
        />
        <div
          className="w-full h-full flex items-center justify-center bg-card/50 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute"
        >
          <ShoppingBag className="size-12" />
        </div>
      </div>

      <div className="mt-2 flex justify-between">
        <div className="mb-0.5">
          <h3 className="mt-0.5 text-base font-semibold text-primary relative">
            {props.product.name}
            <span
              className="bg-black h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-500 rounded"
            />
          </h3>
          <p className="mt-1 text-sm text-primary">
            {props.product.description}
          </p>
        </div>
        <p className="mt-1 text-sm font-medium text-primary">
          {props.product.price}
        </p>
      </div>
    </Link>

  )
}
