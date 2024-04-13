import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/layouts/layout'
import { New } from '@/components/pages/customers'

export const Route = createFileRoute('/customers/new')({
  component: CustomersNew,
})

function CustomersNew() {
  return (
    <Layout>
      <New />
    </Layout>
  )
}
