'use client'

import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import { Button, Sheet, SheetContent, SheetTrigger } from '@openui-org/react/components'
import { DashboardNav } from './dashboard-nav'
import { navShopped } from '@/constants/nav-items'

export function MobileSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="font-bold text-sm hover:bg-primary hover:transition-colors hover:text-primary-foreground hover:shadow-md">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Shop
              </h2>
              <div className="space-y-1">
                <DashboardNav items={navShopped} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
