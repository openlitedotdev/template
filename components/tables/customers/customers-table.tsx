'use client'

import { Separator } from '@openlabs/ui'
import { customersMocks } from '@constants/data'
import { DataTable } from '@components/utilities/data-table'
import { Heading } from '@components/utilities/heading'
import { columns } from './columns'

export default function CategoriesTable() {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Customers (10)"
          description="Manage users (Client side table functionalities.)"
        />
      </div>
      <Separator />
      <DataTable searchKey="name" data={customersMocks} columns={columns} />
    </>
  )
}
