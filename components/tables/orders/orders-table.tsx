'use client'

import { Separator } from '@openlabs/ui'
import { Heading } from '@components/utilities/heading'
import { DataTable } from '@components/utilities/data-table'
import { OrdersMocks } from '@constants/data'
import { columns } from './columns'

export default function OrdersTable() {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Orders (5)"
          description="Manage orders (Client side table functionalities.)"
        />
      </div>
      <Separator />
      <DataTable searchKey="name" data={OrdersMocks} columns={columns} />
    </>
  )
}
