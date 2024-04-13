import { createFileRoute } from '@tanstack/react-router'
import { Get } from '@/components/pages/customers'
import Layout from '@/layouts/layout'

export const Route = createFileRoute('/customers/')({
  component: CustomersPage,
})

function CustomersPage() {
  return (
    <Layout>
      <Get />
    </Layout>
  )
}
