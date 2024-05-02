'use client'

import { Button, Separator } from '@openui-org/react'
import { Plus } from 'lucide-react'
import { Heading } from '@components/utilities/heading'
import { DataTable } from '@components/utilities/data-table'
import { categoriesMocks } from '@constants/data'
import { Link } from 'next-view-transitions'
import { columns } from './columns'

export default function CategoriesTable() {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Categories (10)"
          description="Manage users (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          asChild
        >
          <Link href="/dashboard/categories/create">
            <Plus className="mr-2 size-4" />
            Add New
          </Link>

        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" data={categoriesMocks} columns={columns} />
    </>
  )
}
