'use client'

import { useEffect, useState } from 'react'
import Navbar from './navbar'

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  return (
    <>
      <header
        className={`fixed top-0 z-20  h-[70px] mx-auto py-4  inset-0 shadow-sm transition-opacity duration-700 ease-in-out ${
          visible
            ? 'opacity-100 bg-black  bg-opacity-25 backdrop-blur-md  '
            : 'opacity-0 backdrop-blur-md  bg-opacity-25 '
        }`}
      >
        <Navbar textColor="text-white" />
      </header>
    </>
  )
}
