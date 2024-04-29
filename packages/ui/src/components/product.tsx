'use client'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import clsx from 'clsx'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'

interface ProductProps {
  product: {
    name?: string
    price?: string
    description?: string
    URL: string
  }
}

export function Product(props: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleTouchStart = () => {
    setIsHovered(true)
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
  }

  return (

    <Link
      href={`/products/${props.product.name?.replace(/ /g, '-').toLowerCase()}`}
      className="group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bg-muted/90 rounded overflow-hidden transition-all duration-500 relative aspect-square">
        <Image
          src={props.product.URL}
          alt="Image product test"
          className="w-full h-full object-center object-cover absolute block"
          width="400"
          height="400"
          priority
        />
        <div
          className={clsx('w-full h-full flex items-center justify-center bg-card/50 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute', { 'opacity-100': isHovered })}
        >
          <ShoppingBag className="size-12" />
        </div>
      </div>

      <div className={clsx('mt-2 flex justify-between', { hidden: !props.product.name })}>
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
