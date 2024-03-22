import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import { useState } from 'react'
import avatarImage from '../../public/png/Avatar.png'
import { useMenu } from '@/stores/admin'

function Navbar() {
  const onTrue = useMenu(state => state.onTrue)

  const [_, setInputValue] = useState('')
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <header className="flexbox w-full">
      <button onClick={() => onTrue()}>
        <Menu size={40} className="sm:hidden" />
      </button>
      <div
        md="w-4/5"
        xl="w-4/5"
      >
        <label
          className="relative flexbox hidden sm:flex"
          w="90%"
          p="10px"
        >
          <input
            type="text"
            outline="blue"
            p="10px"
            placeholder="Search..."
            w="xl:100% lg:100% md:100% "
            onChange={valueInput}
            className="rounded-md"
          />
          <Search className="absolute right-20px  w-5 text-gray" />
        </label>

      </div>

      <article className="flexbox gap-12 ">
        <div position="~ relative p-2">
          <div
            position="~ absolute left-15px"
            w="15px"
            className="flexbox p-2 "
            h="15px"
            bg="#3858D6"
            rounded="5px"
          >
            <span color="white" text="~ 3">2</span>
          </div>
          <Bell cursor="~ pointer" className="h-25px w-25px text-slate-500 fill-slate-500" />
        </div>
        <article className="relative flexbox gap-10px">
          <img src={avatarImage} />
          <article className="flex flex-col">
            <span text="3 balance" font="bold">Feyz Ibrahim</span>
            <span text="2">Admin</span>
          </article>

        </article>
        <ChevronDown cursor="~ pointer" className="h-25px w-25px text-slate-500 " />
      </article>
    </header>
  )
}
export default Navbar
