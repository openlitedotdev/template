import { Separator } from '@openui-org/react'
import { Heading } from '../../utils/heading'
import { DataTable } from '../../utils/data-table'
import { columns } from './columns'
import { OrdersMocks } from '@/lib/mocks'

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
