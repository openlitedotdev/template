'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@openui-org/react/components'
import { User } from 'lucide-react'
import { LoginRegister } from './login-register'

export function UserNav() {
  return (
    <Dialog>
      <DialogTrigger><User className="size-8 cursor-pointer" /></DialogTrigger>
      <DialogContent className="w-11/12 max-h-[90%] rounded-sm overflow-auto">
        <DialogHeader>
          <DialogDescription>
            <LoginRegister />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
