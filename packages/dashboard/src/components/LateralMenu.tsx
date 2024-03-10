import { ArrowUpLeftFromSquare, BadgeDollarSign, Flame, Info, Layers, LayoutGrid, LogOut, Package, Settings, StretchHorizontal, Ticket, User, Users } from 'lucide-react'
import ButtonLateralMenu from './ButtonLateralMenu'

interface Props {
  style: boolean
}

export default function LateralMenu(props: Props) {
  return (
    <nav className={`w-xs h-lvh ${props.style ? 'fixed' : 'hidden'} md:sticky top-0 let-0 bottom-0`}>
      <div className="w-auto bg-[#E4E7E9] p-4 text-[#8B8E99] h-lvh md:p-7">
        <div className="flex items-center gap-2 pb-6 font-700">
          <Flame size={32} strokeWidth={0.5} className="fill-[#FFC300] text-[#FFC300]" />
          {' '}
          Lynx
          {' '}
        </div>
        <div className="flex-col font-500">
          <article className="flex-col gap-1">
            <p className="text-blue">MENU</p>
            <ButtonLateralMenu href="/dashboard">
              <LayoutGrid />
              Dashboard
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <Package />
              {' '}
              Products
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <Layers />
              {' '}
              Category
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <StretchHorizontal />
              {' '}
              Orders
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <Ticket />
              {' '}
              Coupon
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <ArrowUpLeftFromSquare />
              {' '}
              Banner
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <BadgeDollarSign />
              {' '}
              Transaction
              {' '}
            </ButtonLateralMenu>
          </article>
          <article className="flex-col gap-1">
            <p className="text-blue">USER MANAGEMENT</p>
            <ButtonLateralMenu href="/">
              <Users />
              {' '}
              Manage Admins
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <User />
              {' '}
              Customers
              {' '}
            </ButtonLateralMenu>
          </article>
          <article className="flex-col gap-1">
            <p className="text-blue">OTHERS</p>
            <ButtonLateralMenu href="/">
              <Settings />
              {' '}
              Settings
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <Info />
              {' '}
              Help
              {' '}
            </ButtonLateralMenu>
            <ButtonLateralMenu href="/">
              <LogOut />
              {' '}
              Logout
              {' '}
            </ButtonLateralMenu>
          </article>
        </div>
      </div>
    </nav>
  )
}
