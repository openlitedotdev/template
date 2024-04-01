import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@openui-org/react'
import { useMenu } from '@/stores/admin'

function Navbar() {
  const onTrue = useMenu(state => state.onTrue)

  const [_, setInputValue] = useState('')
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <header className="flex justify-between px-8 items-center gap-8">
      <button onClick={() => onTrue()} className="p-6">
        <Menu size={40} className="sm:hidden text-white" />
      </button>

      <label className="flex-1 relative flex justify-evenly items-center sm:flex p-3">
        <Input
          type="text"
          placeholder="Search..."
          onChange={valueInput}
          className="rounded-md outline-none p-4 w-full"
        />
        <Search className="absolute right-6 size-6 text-dark-900" />
      </label>
    </header>
  )
}
export default Navbar
