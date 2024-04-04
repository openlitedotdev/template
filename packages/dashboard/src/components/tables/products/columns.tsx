import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openui-org/react'
import { CellAction } from './cell-action'
import type { Product } from '@/lib/mocks'

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
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
    accessorKey: 'price',
    header: 'PRICE',
  },
  {
    accessorKey: 'amount',
    header: 'AMOUNT',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
