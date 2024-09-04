'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@openlite/ui'
import type { Customer } from '@/utils/types'

export const columns: ColumnDef<Customer>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: unknown) =>
          table.toggleAllPageRowsSelected(!!value)
        }
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
    accessorKey: 'role',
    header: 'ROLE',
  },
  {
    accessorKey: 'email',
    header: 'EMAIL',
  },
  {
    accessorKey: 'phone',
    header: 'PHONE',
  },
  {
    id: 'actions',
    cell: () => {},
  },
]
