import { Button, Input, Label } from '@openlabs/ui'
import InputFile from '@components/utilities/input-file'

export default function CreateCategory() {
  return (
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
          <Label>Description</Label>
          <Input type="text" placeholder="Category description" />
        </section>
      </div>
      <Button className="w-fit text-base">Create</Button>
    </form>
  )
}
