'use client'

import { useCallback, useEffect, useState } from 'react'
import useCarousel from 'embla-carousel-react'
import pluginAutoplay from 'embla-carousel-autoplay'

import type { EmblaCarouselType, EmblaPluginType } from 'embla-carousel'
import type { HTMLAttributes, ReactNode } from 'react'
import { IconArrowLeft, IconArrowRight } from './icons'
import { Button } from './ui'

interface CarouselProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  autoplay?: boolean
  buttons?: boolean
  loop?: boolean
}

export default function Carousel({
  children,
  autoplay,
  buttons,
  loop = false,
  ...props
}: CarouselProps) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const plugins: EmblaPluginType[] = []

  if (autoplay)
    plugins.push(pluginAutoplay({ delay: 3000 }))

  const [emblaNode, emblaApi] = useCarousel(
    { loop, align: 'center' },
    plugins,
  )

  const handleScrollPrev = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollPrev()
  }, [emblaApi])

  const handleScrollNext = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi)
      return

    onSelect(emblaApi)

    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div ref={emblaNode} className="overflow-hidden relative ml-2">
      <div {...props}>{children}</div>
      {buttons && (
        <>
          <Button
            className="absolute top-1/2 left-1 disabled:opacity-0 transition-colors bg-indigo/60 text-white rounded-full flex items-center justify-center text-center p-0.5"
            disabled={prevBtnDisabled}
            onClick={handleScrollPrev}
          >
            <IconArrowLeft className="icon icon-tabler icon-tabler-chevron-left size-12" />
          </Button>
          <Button
            className="absolute top-1/2 right-1 disabled:opacity-0 bg-indigo/60 text-white rounded-full flex items-center justify-center text-center p-0.5"
            disabled={nextBtnDisabled}
            onClick={handleScrollNext}
          >
            <IconArrowRight className="icon icon-tabler icon-tabler-chevron-right size-12" />
          </Button>
        </>
      )}
    </div>
  )
}
