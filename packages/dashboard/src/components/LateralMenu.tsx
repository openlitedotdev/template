import { Flame } from 'lucide-react'
import { bottonlateralmenu, bottonlateralothers, bottonlateraluser } from '../lib/optionslateralmenu'
import type { Props } from 'types/lateralmenu'
import ButtonLateralMenu from './ButtonLateralMenu'

export default function LateralMenu(props: Props) {
  return (
    <nav className={`w-xs h-lvh ${props.style ? 'fixed' : 'hidden'} md:sticky top-0 let-0 bottom-0 z-50`}>
      <div className="px-7 py-2 flex-col justify-between w-auto bg-[#E4E7E9] h-lvh text-[#8B8E99]">
        <div className="pb-6 flex gap-2 items-center font-700">
          <Flame size={32} strokeWidth={0.5} className="text-[#FFC300] fill-[#FFC300]" />
          Lynx
        </div>
        <div className="font-500 flex-col h-full justify-between">
          <article className="flex-col">
            <p className="text-blue">MENU</p>
            {
              bottonlateralmenu.map((item, index) => {
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
          <article className="flex-col">
            <p className="text-blue">USER MANAGEMENT</p>
            {
              bottonlateraluser.map((item, index) => {
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
          <article className="flex-col">
            <p className="text-blue">OTHERS</p>
            {
              bottonlateralothers.map((item, index) => {
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
