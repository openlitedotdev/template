import { Separator } from '@openui-org/react'
import { Heading } from '../../utils/heading'
import { DataTable } from '../../utils/data-table'
import { columns } from './columns'
import { customersMocks } from '@/lib/mocks'

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
