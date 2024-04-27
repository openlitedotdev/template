'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@openui-org/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Product } from './product'
import { productsMocks } from '@/lib/mocks'

export default function CarouselProduct() {
  return (
    <div className="p-10">
      <Carousel className="w-full h-auto">
        <CarouselContent>
          {productsMocks.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Product
                product={product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious>
          <ArrowLeft />
        </CarouselPrevious>
        <CarouselNext>
          <ArrowRight />
        </CarouselNext>
      </Carousel>
    </div>
  )
}
