import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openui-org/react'
import type { Categories } from 'types/index'
import { CellAction } from './cell-action'

export const columns: ColumnDef<Categories>[] = [
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
    accessorKey: 'description',
    header: 'DESCRIPTION',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
