'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openlabs/ui'
import type { Coupons } from '@/lib/types'
import { CellAction } from './cell-actions'

export const columns: ColumnDef<Coupons>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'coupon',
    header: 'COUPON',
  },
  {
    accessorKey: 'discount',
    header: 'DISCOUNT',
  },
  {
    accessorKey: 'min',
    header: 'MIN',
  },
  {
    accessorKey: 'expiry',
    header: 'EXPIRY DATE',
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
