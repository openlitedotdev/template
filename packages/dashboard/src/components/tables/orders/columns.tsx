import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openui-org/react'
import type { Orders } from 'types/index'
import { CellAction } from './cell-actions'

export const columns: ColumnDef<Orders>[] = [
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
    accessorKey: 'date',
    header: 'DATE',
  },
  {
    accessorKey: 'customer',
    header: 'CUSTOMER',
  },
  {
    accessorKey: 'total',
    header: 'TOTAL',
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
