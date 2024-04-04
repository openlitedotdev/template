import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/layouts/layout'
import { New } from '@/components/pages/products'

export const Route = createFileRoute('/products/new')({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <Layout>
      <New />
    </Layout>
  )
}
