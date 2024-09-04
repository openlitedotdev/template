import CreateCategory from '@/components/forms/create-category'
import { Heading } from '@/components/utilities/heading'

export default function Page() {
  return (
    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <Heading
        title="Create Category"
        description="Create product with style"
      />
      <CreateCategory />
    </div>
  )
}
