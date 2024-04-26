import OrdersTable from '@/components/tables/orders/orders-table'
import Layout from '@/layouts/layout'

export default function Orders() {
  return (
    <Layout>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <OrdersTable />
      </div>
    </Layout>
  )
}
