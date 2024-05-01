'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openui-org/react'
import type { Categories } from '@shopped/typings'
import { CellAction } from './cell-actions'

export const columns: ColumnDef<Categories>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: unknown) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'NAME',
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
