import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useAdmin } from '@/stores/admin'
import Dashboard from '@/components/pages/dashboard'
import Header from '@/components/header'
import LateralMenu from '@/components/sidebar'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const admin = useAdmin(state => state.credentials)
  const navigate = useNavigate({ from: '/' })

  useEffect(() => {
    if (!admin)
      navigate({ to: '/login' })
  }, [admin])

  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <LateralMenu />
        <main className="w-full pt-16">
          <Dashboard />
        </main>
      </div>
    </>
  )
}
