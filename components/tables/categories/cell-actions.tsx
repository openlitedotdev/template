'use client'

import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { Button, Dropdown, DropdownContent, DropdownItem, DropdownLabel, DropdownTrigger } from '@openlabs/ui'
import { useState } from 'react'
import type { Categories } from '@/utils/types'
import { AlertModal } from '@components/notifications/alert-modal'

interface CellActionProps {
  data: Categories
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
      <Dropdown modal={false}>
        <DropdownTrigger asChild>
          <Button color="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownLabel>Actions</DropdownLabel>

          <DropdownItem>
            <Edit className="mr-2 h-4 w-4" />
            {' '}
            Update
          </DropdownItem>
          <DropdownItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" />
            {' '}
            Delete
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </>
  )
}
