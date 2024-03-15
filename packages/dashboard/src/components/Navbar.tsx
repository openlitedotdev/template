import { Bell, Play, Power, Search } from 'lucide-react'
import avatarImage from '../../public/png/Avatar.png'

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
    <header className='flexbox'  lg="w-full gap-0" md='flex justify-center gap-2xl'>
      <div 
        lg="w-4/5"
        xl= "w-4/5"
      >
        <label
          className="relative flexbox "
          w="xl:85% lg:85% md:85%"
          p="10px"
          mt="10px"
        >
          <input
            type="text"
            outline="blue"
            p="10px"
            placeholder="Search..."
            w="xl:100% lg:100% md:100% "
            onChange={valueInput}
            className='rounded-md'
          />
          <Search className="absolute right-20px  w-5 text-gray" />
        </label>

      </div>
      
      <article className="flexbox gap-6 "   >
        <div position="~ relative p-2" >
          <div
            position="~ absolute left-15px"
            w="15px"
            className="flexbox p-2 "
            h="15px"
            bg="#3858D6"
            rounded="5px"
            
          >
            <span color='white' text='~ 3'>2</span>
          </div>
          <Bell cursor="~ pointer" className="h-25px w-25px text-slate-500 fill-slate-500" />
        </div>
        <article className="relative flexbox gap-10px"  >
          <img src={avatarImage} />
          <article flex='~ col ' >
            <span text='3 balance' font='bold'>Feyz Ibrahim</span>
            <span text='2'>Admin</span>
          </article>
          
          <Play  className="rotate-90 w-4 h-4 fill-slate-500 stroke-slate-500  text-gray"
            cursor="~ pointer"
            onClick={toggleSeeMenu}
          />
          <ul
            w="30px"
            h='30px'
            bg="green"
            text="~ center white"
            hover='bg-gray'
            cursor='pointer'
            p="5px"
            rounded="50%"
            flex='~  items-center justify-center'
            className={`${seeMenu ? 'top-8 absolute  -right-2' : ' top-50px right-0 opacity-0.5 '} transition-all ease-in-out   duration-300 absolute overflow-hidden`}
          >
            <li
              transition="all 0.3s ease"
              p="3px"
              m="3px"
              rounded="5px"
            >
            <Power />
            </li>
          </ul>
        </article>
      </article>
    </header>
  )
}
export default Navbar
