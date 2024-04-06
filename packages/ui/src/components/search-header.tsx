import { Input } from '@openui-org/react'
import { SearchIcon } from 'lucide-react'

export function SearchBar() {
  return (
    <form
      className="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-80"
    >
      <label className="w-full">
        <span className="sr-only">search for products</span>
        <Input
          type="text"
          name="search"
          placeholder="Search for products..."
          autoComplete="on"
          required
        />
      </label>
      <div className="absolute inset-y-0 right-0">
        <button
          type="submit"
          className="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80"
        >
          <span className="sr-only">search</span>
          <SearchIcon aria-hidden className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}
