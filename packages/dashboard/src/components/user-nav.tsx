'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@openui-org/react'

export function UserNav() {
  return (
    <Avatar className="size-9 cursor-pointer">
      <AvatarImage src="/no-profile.jpeg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
