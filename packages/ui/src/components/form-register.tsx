'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Toaster, toast } from 'sonner'
import { Button, Input } from '@/components/ui'
import {
  IconEmail,
  IconEye,
  IconEyeBlock,
  IconGoogle,
  IconPhon,
  IconUser,
  Password,
} from '@/components/icons'

export default function FormRegister() {
  const [showIconConfirmPassword, setShowIconConfirmPassword] = useState(false)
  const [showIconPassword, setShowIconPassword] = useState(false)
  const [messageErrorPassword, setMessageErrorPassword] = useState('')
  const [messageEmail, setMessageEmail] = useState('') // Maneja estado de Email registrado
  const [messagename, setMessageName] = useState('') // Maneja estado de name usuario
  const [messageErrorPhoneNumber, setMessageErroPhoneNumber] = useState('') // Maneja mesaje de error PhoneNumber
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({
    confirmPassword: '',
  })

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const togglePasswordVisibility = () => {
    setShowIconPassword(showIconPassword => !showIconPassword)
  }

  const togglePasswordConfirmVisibility = () => {
    setShowIconConfirmPassword(
      showIconConfirmPassword => !showIconConfirmPassword,
    )
  }

  // Stores the input values Confirm Password
  const handleGetInputConfimPassword = (key: string, value: string) => {
    setConfirmPasswordValidation(prev => ({ ...prev, [key]: value }))
    setMessageName('')
  }

  const handleGetInputsValue = (key: string, value: string) => {
    setUser(prev => ({ ...prev, [key]: value }))
    setMessageEmail('')
    setMessageName('')
  }

  const handleRegisterUser = async (e: FormEvent) => {
    e.preventDefault()

    // eslint-disable-next-line node/prefer-global/process
    const url_api = process.env.NEXT_PUBLIC_URL_BACKEND ?? ''

    // Validation UserName

    if (user.name.length < 6) {
      setMessageName('The username must be more than 6 characters')
      return
    }
    else if (/\d/.test(user.name)) {
      setMessageName('The username cannot contain numbers.')
      return
    }
    else {
      setMessageName('')
    }

    // Validation PASSWORD

    if (user.password !== confirmPasswordValidation.confirmPassword) {
      setMessageErrorPassword('Passwords do not match.')
      return
    }
    else {
      setMessageErrorPassword('')
    }

    // Validartion Phone
    const REGULAR_VALIDATION_EXPRESSION_NUMBER = /^[0-9]+$/
    if (!REGULAR_VALIDATION_EXPRESSION_NUMBER.test(user.phone)) {
      setMessageErroPhoneNumber(
        'El usuario no puede contener caracteres, ejemplo: 3123840933',
      )
      return
    }
    else {
      setMessageErroPhoneNumber('')
    }

    try {
      const res = await fetch(`${url_api}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
        }),
      })
      const data = await res.json()

      // Message errors
      if (data.detail)
        toast(data.detail.message)
    }
    catch (error) {
      console.error('Error processing the request', error)
    }
  }

  return (
    <>
      <form
        className="bg-[#F5F5F7] px-8 pt-6 mb-4 "
        onSubmit={handleRegisterUser}
      >
        <h3 className="mt-2 mb-4 text-[#8B8E99] font-semibold text-2xl text-center md:text-left">
          SingUp
        </h3>
        <Toaster position="top-right" />
        <div className="mb-2 relative">
          <label
            htmlFor="username"
            className="block text-[#8B8E99] text-xs mb-2"
          >
            Username
          </label>
          <div className="relative">
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Jhon Doe"
              onChange={e =>
                handleGetInputsValue('name', e.currentTarget.value)}
            />
            <IconUser />
          </div>
          {messagename && (
            <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
              {messagename}
            </div>
          )}
        </div>
        <div className="mb-2 relative">
          <label htmlFor="email" className="block text-[#8B8E99] text-xs mb-2">
            Email
          </label>
          <div className="relative">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={e =>
                handleGetInputsValue('email', e.currentTarget.value)}
            />
            <IconEmail />
          </div>
          {messageEmail && (
            <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
              {messageEmail}
            </div>
          )}
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
              type={showIconPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={e =>
                handleGetInputsValue('password', e.currentTarget.value)}
            />
            <Password />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showIconPassword ? <IconEye /> : <IconEyeBlock />}
            </button>
          </div>
        </div>
        {messageErrorPassword && (
          <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
            {messageErrorPassword}
          </div>
        )}

        <div className="mb-2 relative">
          <label
            htmlFor="confirmPassword"
            className="block text-[#8B8E99] text-xs mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showIconConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter your password"
              onChange={e => handleGetInputConfimPassword('confirmPassword', e.currentTarget.value)}
            />
            <Password />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordConfirmVisibility}
            >
              {showIconConfirmPassword ? <IconEye /> : <IconEyeBlock />}
            </button>
          </div>
        </div>

        <div className="mb-2 relative">
          <label
            htmlFor="phoneNumber"
            className="block text-[#8B8E99] text-xs mb-2"
          >
            Phone Number
          </label>
          <div className="relative">
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              onChange={e =>
                handleGetInputsValue('phone', e.currentTarget.value)}
            />
            <IconPhon />
          </div>
        </div>
        <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
          {messageErrorPhoneNumber}
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
