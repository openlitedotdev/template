import ProductsTable from '@/components/tables/products/products-table'
import Layout from '@/layouts/layout'

export function Products() {
  return (
    <Layout>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <ProductsTable />
      </div>
    </Layout>
  )
}
