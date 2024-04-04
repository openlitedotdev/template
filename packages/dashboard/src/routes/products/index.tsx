import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/layouts/layout'
import { Get } from '@/components/pages/products'

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <Layout>
      <Get />
    </Layout>
  )
}
