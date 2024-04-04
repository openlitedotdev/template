import { Card, CardContent, CardHeader, CardTitle } from '@openui-org/react'
import { Icons } from './utils/icons'
import { salesItems } from '@/lib/const'

export default function Sales() {
  return (
    <>
      {salesItems.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight']

        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Active Now
              </CardTitle>
              <Icon className="size-6" />
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl">+573</h2>
              <p className="text-xs text-dark-300">
                +201 since last hour
              </p>
            </CardContent>
          </Card>

        )
      })}
    </>
  )
}
