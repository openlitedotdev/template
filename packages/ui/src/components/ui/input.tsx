import type { InputHTMLAttributes } from 'react'

type PropsInput = InputHTMLAttributes<HTMLInputElement>
// interface PropsDeInputs extends HTMLAttributes<HTMLInputElement>{
// }

export function Input(props: PropsInput) {
  return (
    <input
      {...props}
      className="w-full border text-sm rounded-md border-[#E4E7E9] outline-none focus:border-[#2563EB] py-2 px-3 pl-10 placeholder:text-xs md:placeholder:text-base"
    />
  )
}
