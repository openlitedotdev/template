import { Bell, ChevronDown, Search, UserRound } from 'lucide-react'

import { useState } from 'react'

function Navbar() {
  const [seeMenu, setSeeMenu] = useState(false)
  const [_, setInputValue] = useState('')
  const toggleSeeMenu = () => setSeeMenu(!seeMenu)
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <header flex="~ xl:justify-end md:justify-end lg:justify-end  items-center wrap-reverse justify-center">
      <label
        className="relative flexbox"
        w="xl:50% lg:50% md:35% 90%"
        p="10px"
        mt="10px"
      >
        <input
          type="text"
          outline="blue"
          p="10px"
          placeholder="Search..."
          w="xl:100% lg:100% md:50% 100%"
          onChange={valueInput}
        />
        <Search className="absolute right-20px" />
      </label>

      <article className="flexbox gap-10">
        <div position="~ relative">
          <div
            position="~ absolute left-15px"
            w="15px"
            className="flexbox"
            h="15px"
            bg="blue"
            rounded="5px"
          >
            <p>0</p>
          </div>
          <Bell cursor="~ pointer" className="h-25px w-25px" />
        </div>
        <article className="relative flexbox gap-20px">
          <UserRound cursor="~ pointer" />
          <article>
            <p>Hello</p>
            <p>Admin</p>
          </article>
          <ChevronDown
            className="mt-[20px]"
            cursor="~ pointer"
            onClick={toggleSeeMenu}
          />
          <ul
            w="100px"
            bg="blue"
            text="~ center white"
            p="10px"
            rounded="10px"
            className={`${seeMenu ? 'top-50px absolute  left-24px' : ' top-50px  left-0px opacity-0.5 '} transition-all ease-in-out   duration-300 absolute overflow-hidden`}
          >
            <li
              bg=" hover:#FF947E"
              transition="all 0.3s ease"
              p="3px"
              m="3px"
              rounded="5px"
              cursor="~ pointer"
            >
              Sign off
            </li>
          </ul>
        </article>
      </article>
    </header>
  )
}
export default Navbar
