import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/layouts/layout'
import { New } from '@/components/pages/categories'

export const Route = createFileRoute('/categories/new')({
  component: CategoriesPage,
})

function CategoriesPage() {
  return (
    <Layout>
      <New />
    </Layout>
  )
}
