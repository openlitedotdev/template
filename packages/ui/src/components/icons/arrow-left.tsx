import type { HTMLAttributes } from 'react'

interface SVGProps extends HTMLAttributes<HTMLOrSVGElement> {}
export function IconArrowLeft(props: SVGProps) {
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </>
  )
}
