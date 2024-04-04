import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useAdmin } from '@/stores/admin'
import Dashboard from '@/components/pages/dashboard'
import Layout from '@/layouts/layout'

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
    <Layout>
      <Dashboard />
    </Layout>
  )
}
