import { Card, CardContent, CardHeader, CardTitle } from '@openui-org/react'
import { Icons } from './icons'
import { salesItems } from '@/lib/const'

export default function Sales() {
  return (
    <>
      {salesItems.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight']

        return (
          <Card key={index} className="bg-dark-900/90 border-dark-700/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Active Now
              </CardTitle>
              <Icon className="size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
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
