'use client'

import Image from 'next/image'
import { Heading } from './utilities/heading'
import { CellAction } from './cell-actions-banners'
import { BannersMocks } from '@/utils/constants/data'

export default function BannersDashboard() {
  return (
    <>
      <Heading
        title="Banners (2)"
        description="Manage Banners (Client side table functionalities.)"
      />
      <div className="h-[calc(98vh-200px)] p-2 overflow-y-auto">
        {BannersMocks.map((banner, index) => (
          <div
            key={index}
            className="p-4 border flex flex-col gap-4 mb-2 rounded-lg shadow-sm relative"
          >
            <Heading title={banner.title} description={banner.description} />
            <Image
              src={banner.image}
              width="1000"
              height="1000"
              className="rounded-lg"
              alt={banner.title}
            />
            <div className="absolute right-1 top-1">
              <CellAction />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
