'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, Input } from '@/components/ui'
import {
  IconEmail,
  IconEye,
  IconEyeBlock,
  IconGoogle,
  Password,
} from '@/components/icons'

export default function LoginUser() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword)
  }

  return (
    <>
      <form className="bg-[#F5F5F7] px-8 pt-6 mb-4 ">
        <h3 className="mt-2 mb-4 text-[#8B8E99] font-semibold text-2xl text-center md:text-left">
          Login
        </h3>

        <div className="mb-2 relative">
          <label
            htmlFor="username"
            className="block text-[#8B8E99] text-xs mb-2"
          >
            Email
          </label>
          <div className="relative">
            <Input type="email" placeholder="Jhondao@gmail.com" name="email" />
            <IconEmail />
          </div>
        </div>

        <div className="mb-2 relative">
          <label
            htmlFor="password"
            className="block text-[#8B8E99] text-xs mb-2"
          >
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
            />
            <Password />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IconEye /> : <IconEyeBlock />}
            </button>
          </div>
        </div>

        <div className="mb-2 mt-4 flex items-center justify-center font-semibold">
          <Link href="/" className="text-[#2563EB] text-sm">
            Forgot Password?
          </Link>
        </div>

        <div className="mb-2">
          <Button className="bg-[#2563EB] text-white py-2 px-4 rounded w-full hover:bg-[#2055c6]">
            Login
          </Button>
        </div>
        <div className="mb-2 mt-4 flex gap-2">
          <p className="text-sm">Already have an account?</p>
          <Link href="/Login" className="text-[#2563EB] text-sm font-semibold">
            Login Now
          </Link>
        </div>
        <div className="relative mt-6 text-center">
          <hr className="text-[#dfdfe1] mt-4" />
          <p className="text-gray-dark text-sm absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F5F5F7] w-9 px-2 md:-top-0.7 md:left- md:right-2">
            OR
          </p>
        </div>
        <div className="mt-6">
          <Button className=" flex justify-center gap-2 items-center bg-[#d5d8e5] rounded-2xl text-sm py-2 px-4 w-full hover:bg-[#c3c5d1]">
            <IconGoogle />
            {' '}
            Continue wtih Google
          </Button>
        </div>
      </form>
    </>
  )
}
