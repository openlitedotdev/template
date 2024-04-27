import { Button, Input, Label, ScrollArea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@openui-org/react'
import { Heading } from '@/components/utils/heading'
import Layout from '@/layouts/layout'
import InputFile from '@/components/utils/input-file'

export function CreateProduct() {
  return (
    <Layout>
      <ScrollArea className="flex-1 space-y-4 h-[85vh]">
        <div className="px-4 md:px-8 pb-5 overflow-hidden ">
          <Heading title="Create product" description="Create product with style" />
          <form className="flex flex-col gap-4 pt-3">
            <div className="flex flex-col gap-2">
              <Label>Imagenes</Label>
              <InputFile />
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <section className="flex flex-col gap-2">
                <Label>Nombre</Label>
                <Input type="text" placeholder="Product name" />
              </section>
              <section className="flex flex-col gap-2">
                <Label>Desciption</Label>
                <Input type="text" placeholder="Product desciption" />
              </section>
              <section className="flex flex-col gap-2">
                <Label>Price</Label>
                <Input type="number" placeholder="Price" />
              </section>
              <section className="flex flex-col gap-2">
                <Label>Offer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select to offer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="True">True</SelectItem>
                    <SelectItem value="False">False</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="flex flex-col gap-2">
                <Label>Offer price</Label>
                <Input type="number" placeholder="Offer price" />
              </section>
              <section className="flex flex-col gap-2">
                <Label>Punctuation</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select to punctuation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <section className="flex flex-col gap-2">
                <Label>Brand</Label>
                <Input type="text" placeholder="Brand" />
              </section>
            </div>
            <Button className="w-fit text-base">Create</Button>
          </form>
        </div>
      </ScrollArea>
    </Layout>
  )
}
