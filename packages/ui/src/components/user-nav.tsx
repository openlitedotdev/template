'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, Tabs, TabsList, TabsTrigger } from '@openui-org/react/components'
import { User } from 'lucide-react'
import { Login } from './login'
import { Register } from './register'

export function UserNav() {
  return (
    <Dialog>
      <DialogTrigger><User className="size-8 cursor-pointer" /></DialogTrigger>
      <DialogContent className="w-11/12 max-h-[90%] rounded-sm overflow-auto">
        <DialogHeader>
          <DialogDescription>
            <Tabs defaultValue="login" className="bg-background w-full text-primary">
              <TabsList className="bg-background text-primary">
                <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-background">Login</TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-background">Register</TabsTrigger>
              </TabsList>
              <Login />
              <Register />
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
