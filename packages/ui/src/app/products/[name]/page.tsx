import { Button } from '@openui-org/react/components'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import imagen from '../../../../public/product-test.webp'
import { ProductAccount } from '@/components/product-account'

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      <header className="pt-5 px-16">
        <Button asChild>
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
      </header>
      <div>
        <div className="flex justify-center p-10 gap-10 flex-wrap">
          <Image src={imagen} alt="imagen" className="bg-muted/90 object-cover backdrop-brightness-90 object-center aspect-square" width="500" height="500" />
          <article className="w-full md:w-[400px] flex flex-col gap-4">
            <h2 className="text-5xl font-bold">{params.name}</h2>
            <p>$10</p>
            <ProductAccount />
            <Button>Add to cart</Button>
            <figure>
              <h3 className="font-semibold pb-3">Description</h3>
              <p className="text-sm font-extralight text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo sint totam numquam, blanditiis consectetur cum magni corrupti assumenda ratione molestiae ducimus dolores, suscipit voluptatem quibusdam ad hic quia tempora.</p>
            </figure>
          </article>
        </div>
      </div>
    </>
  )
}
