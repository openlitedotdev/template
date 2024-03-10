import { Link } from '@tanstack/react-router'
import type { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export default function ButtonLateralMenu(props: Props) {
  return (
    <Link to={props.href} className="flex gap-2 rounded-md px-3 py-1 focus:text-blue hover:text-blue focus:bg-[#8B8E99]/35 hover:bg-[#8B8E99]/35">
      {props.children}
    </Link>
  )
}
