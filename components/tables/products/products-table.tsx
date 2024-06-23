'use client'

import { Link } from 'next-view-transitions'
import { Button, Separator } from '@openlabs/ui'
import { Plus } from 'lucide-react'
import { Heading } from '@components/utilities/heading'
import { DataTable } from '@components/utilities/data-table'
import { productsMocks } from '@/lib/constants/data'
import { columns } from './columns'

export default function ProductsTable() {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Products (10)"
          description="Manage users (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          asChild
        >
          <Link href="/dashboard/products/create">
            <Plus className="mr-2 size-4" />
            Add New
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" data={productsMocks} columns={columns} />
    </>
  )
}
