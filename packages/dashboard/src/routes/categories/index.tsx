import { createFileRoute } from '@tanstack/react-router'
import { Get } from '@/components/pages/categories'
import Layout from '@/layouts/layout'

export const Route = createFileRoute('/categories/')({
  component: CategoriesPage,
})

function CategoriesPage() {
  return (
    <Layout>
      <Get />
    </Layout>
  )
}
