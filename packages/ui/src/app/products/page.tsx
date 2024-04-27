import Image from 'next/image'
import imagen from '../../../public/t-shirt-1.avif'

export default function ProductsPage() {
  return (
    <div className="flex items-center p-10 justify-center gap-5">
      <article>
        <Image
          src={imagen}
          alt="Image product test"
          className="object-center object-cover "
          width="400"
          height="400"
          priority
        />
      </article>
      <article className="w-[400px]">
        <h2>product 1</h2>
      </article>
    </div>
  )
}
