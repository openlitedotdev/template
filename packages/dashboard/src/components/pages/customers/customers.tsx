import CustomersTable from '@/components/tables/customers/customers-table'
import Layout from '@/layouts/layout'

export function Customers() {
  return (
    <Layout>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <CustomersTable />
      </div>
    </Layout>
  )
}
