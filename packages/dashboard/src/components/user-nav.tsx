'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@openui-org/react'

export function UserNav() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/no-profile.jpeg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
