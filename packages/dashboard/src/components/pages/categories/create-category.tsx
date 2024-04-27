import { Button, Input, Label } from '@openui-org/react'
import { Heading } from '@/components/utils/heading'
import Layout from '@/layouts/layout'
import InputFile from '@/components/utils/input-file'

export function CreateCategory() {
  return (
    <Layout>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Heading title="Create Category" description="Create product with style" />
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Imagenes</Label>
            <InputFile />
          </div>
          <div className="flex gap-2">
            <section className="w-1/2 flex flex-col gap-2">
              <Label>Nombre</Label>
              <Input type="text" placeholder="Category name" />
            </section>
            <section className="w-1/2 flex flex-col gap-2">
              <Label>Desciption</Label>
              <Input type="text" placeholder="Category desciption" />
            </section>
          </div>
          <Button className="w-fit text-base">Create</Button>
        </form>
      </div>
    </Layout>
  )
}
