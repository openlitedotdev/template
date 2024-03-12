import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useAdmin } from '@/stores/admin'
import LateralMenu from '@/components/LateralMenu'

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
      <div className="flex justify-between">
        <LateralMenu style />
        <section className="w-full">
          <Navbar />
        </section>
      </div>
    </>
  )
}
