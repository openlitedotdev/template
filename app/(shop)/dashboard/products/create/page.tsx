import { Heading } from '@components/utilities/heading'
import CreateProductForm from '@components/forms/create-product'


export default function CreateProduct() {
  return (
    <div className="flex-1 space-y-4 h-[85vh] overflow-y-auto">
      <div className="px-4 md:px-8 pb-5 overflow-hidden ">
        <Heading title="Create product" description="Create product with style" />
        <CreateProductForm />
      </div>
    </div>
  )
}
