'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@openlite/ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Product } from './pricing/product'
import { productsMocks } from '@/utils/mocks'

export default function CarouselProduct() {
  return (
    <div className="p-10">
      <Carousel orientation='horizontal'>
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
