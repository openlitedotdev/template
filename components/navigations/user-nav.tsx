'use client'

import { Avatar, AvatarFallback, AvatarImage, Button, Dropdown, DropdownContent, DropdownGroup, DropdownItem, DropdownSeparator, DropdownTrigger } from '@openlabs/ui'

export default function UserNav() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button color="ghost" className="relative h-8 w-8 rounded-full cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/no-profile.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownTrigger>
      <DropdownContent className="w-56" align="end" forceMount>
        <DropdownGroup>
          <DropdownItem>
            Profile
          </DropdownItem>
          <DropdownItem>
            Billing
          </DropdownItem>
          <DropdownItem>
            Settings
          </DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownItem>
          Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
