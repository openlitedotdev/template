import { Flame, X } from 'lucide-react'
import type { Props } from 'types/lateralmenu'
import { bottonLateralMenu, bottonLateralOthers, bottonLateralUser } from '../lib/const'
import ButtonLateralMenu from './ButtonLateralMenu'

export default function LateralMenu(props: Props) {
  return (
    <nav className={`w-full md:w-xs ${props.style ? 'fixed' : 'hidden'} md:sticky top-0 let-0 bottom-0 z-50 overflow-auto bg-[#E4E7E9]`}>
      <div className="px-7 flex-and-col gap-8 lg:gap-0 justify-evenly w-auto p-3 sm:h-screen text-[#8B8E99] relative">
        <X size={40} className="text-black absolute right-2 top-2 block md:hidden" />
        <div className="flex gap-2 items-center font-700">
          <Flame size={40} strokeWidth={0.5} className="text-[#FFC300] fill-[#FFC300]" />
          Lynx
        </div>
        <div className="font-500 flex-and-col md:gap-8 lg:gap-0">
          <article className="flex-and-col">
            <p className="text-blue">MENU</p>
            {
              bottonLateralMenu.map((item, index) => {
                return (
                  <ButtonLateralMenu key={index} href={item.href}>
                    <item.icon />
                    {item.text}
                  </ButtonLateralMenu>
                )
              },
              )
}
          </article>
          <article className="flex-and-col">
            <p className="text-blue">USER MANAGEMENT</p>
            {
              bottonLateralUser.map((item, index) => {
                return (
                  <ButtonLateralMenu key={index} href={item.href}>
                    <item.icon />
                    {item.text}
                  </ButtonLateralMenu>
                )
              },
              )
            }
          </article>
          <article className="flex-and-col">
            <p className="text-blue">OTHERS</p>
            {
              bottonLateralOthers.map((item, index) => {
                return (
                  <ButtonLateralMenu key={index} href={item.href}>
                    <item.icon />
                    {item.text}
                  </ButtonLateralMenu>
                )
              },
              )
            }
          </article>
        </div>
      </div>
    </nav>
  )
}
