'use client'

import { Button } from '@openlite/ui'
import { useState } from 'react'

export function ProductAccount() {
  const [account, setAccount] = useState(1)
  return (
    <figure>
      <h3 className="font-semibold pb-3">Quantity</h3>
      <div className="flex gap-3 items-center">
        <Button
          onClick={() => setAccount(account - 1)}
          className={`${account === 1 && 'pointer-events-none bg-primary/85'}`}
        >
          -
        </Button>
        <span className="w-16 p-2 text-center rounded-sm bg-muted/90">
          {account}
        </span>
        <Button onClick={() => setAccount(account + 1)}>+</Button>
      </div>
    </figure>
  )
}
