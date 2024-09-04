'use client'

import { Button, Separator } from '@openlite/ui'
import { Heading } from '@components/utilities/heading'
import { DataTable } from '@components/utilities/data-table'
import { CouponsMocks } from '@/utils/constants/data'
import { Link } from 'next-view-transitions'
import { Plus } from 'lucide-react'
import { columns } from './columns'

export default function CouponsTable() {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title="Coupons (5)" description="Manage your coupons here." />
        <Button className="text-xs md:text-sm" asChild>
          <Link href="/dashboard/coupons/create">
            <Plus className="mr-2 size-4" />
            Add New
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" data={CouponsMocks} columns={columns} />
    </>
  )
}
