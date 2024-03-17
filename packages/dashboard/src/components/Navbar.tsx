import { Bell, Search, UserRound } from 'lucide-react'

import { useState } from 'react'

function Navbar() {
  const [_, setInputValue] = useState('')
  // const toggleSeeMenu = () => setSeeMenu(!seeMenu)
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
        </article>
      </article>
    </header>
  )
}
export default Navbar
