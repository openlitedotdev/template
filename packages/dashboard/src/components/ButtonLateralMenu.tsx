import { Link } from '@tanstack/react-router'
import type { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export default function ButtonLateralMenu(props: Props) {
  return (
    <Link to={props.href} className="px-3 py-2 flex gap-2 hover:bg-[#8B8E99]/35 rounded-md focus:bg-[#8B8E99]/35 focus:text-blue hover:text-blue">
      {props.children}
    </Link>
  )
}
