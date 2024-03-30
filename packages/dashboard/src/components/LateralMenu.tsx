import { X } from 'lucide-react'
import { Label } from '@openui-org/react'
import { bottonLateralMenu, bottonLateralOthers, bottonLateralUser } from '../lib/const'
import ButtonLateralMenu from './ButtonLateralMenu'
import { useMenu } from '@/stores/admin'

export default function LateralMenu() {
  const onFalse = useMenu(state => state.onFalse)
  const valueMenu = useMenu(state => state.value)
  return (
    <nav className={`menu-lateral h-screen sm:w-xs ${valueMenu ? 'fixed menu-lateral-animate' : 'hidden sm:block'} inset-0 z-50 overflow-auto w-80  border-r border-dark-700/50`}>
      <div className="p-4 md:px-7 flex flex-col gap-8 lg:gap-0 justify-evenly text-dark-500 relative">
        <button onClick={() => onFalse()}>
          <X size={40} className="text-white absolute right-2 top-2 block sm:hidden" />
        </button>
        <div className="flex gap-2 items-center font-700">
          <h2 className="text-2xl font-bold text-white mb-8">Dashboard</h2>
        </div>
        <div className="font-500 flex flex-col gap-1 md:gap-8 lg:gap-0">
          <article className="flex flex-col gap-1">
            <Label variant="ligth" size="xl">
              Menu
            </Label>
            <div className="mt-4">
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
            </div>
          </article>
          <article className="flex flex-col gap-1 mt-4">
            <Label variant="ligth" size="xl">
              Profile
            </Label>
            <div className="mt-4">
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
            </div>
          </article>
          <article className="flex flex-col gap-1 mt-4">
            <Label variant="ligth" size="xl">
              Others
            </Label>
            <div className="mt-4">

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
            </div>
          </article>
        </div>
      </div>
    </nav>
  )
}
