import { Heading } from '@components/utilities/heading'
import CreateProductForm from '@components/forms/create-product'
import { ScrollArea } from '@openui-org/react/components'

export default function CreateProduct() {
  return (
    <ScrollArea className="flex-1 space-y-4 h-[85vh]">
      <div className="px-4 md:px-8 pb-5 overflow-hidden ">
        <Heading title="Create product" description="Create product with style" />
        <CreateProductForm />
      </div>
    </ScrollArea>
  )
}
