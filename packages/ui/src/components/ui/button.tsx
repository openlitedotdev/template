import type { ButtonHTMLAttributes } from 'react'

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: PropsButton) {
  return <button {...props}>{props.children}</button>
}
