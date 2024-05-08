'use client'

import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@openui-org/react'
import { useState } from 'react'
import type { Coupons } from '@shopped/typings'
import { AlertModal } from '@components/notifications/alert-modal'

interface CellActionProps {
  data: Coupons
}

export const CellAction: React.FC<CellActionProps> = () => {
  const [loading, _] = useState(false)
  const [open, setOpen] = useState(false)

  const onConfirm = async () => {}

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            {' '}
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" />
            {' '}
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
