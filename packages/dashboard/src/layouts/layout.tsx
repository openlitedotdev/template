import React from 'react'
import Header from '@/components/header'
import LateralMenu from '@/components/sidebar'
import { Toaster } from '@/components/utils/sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <LateralMenu />
        <main className="w-full pt-16">
          {children}
          <Toaster position="bottom-right" />
        </main>
      </div>
    </>
  )
}
