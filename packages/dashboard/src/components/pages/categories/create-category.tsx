import { Heading } from '@/components/utils/heading'
import Layout from '@/layouts/layout'

export function CreateCategory() {
  return (
    <Layout>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Heading title="Create Category" description="Create product with style" />
      </div>
    </Layout>
  )
}
