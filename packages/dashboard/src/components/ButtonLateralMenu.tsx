import { Link } from '@tanstack/react-router'
import type { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export default function ButtonLateralMenu(props: Props) {
  return (
    <Link to={props.href} className="px-3 py-2.5 flex gap-2 rounded-md hover:bg-dark-800/90 text-dark-300 focus:bg-dark-900/90 hover:text-white font-medium">
      {props.children}
    </Link>
  )
}
