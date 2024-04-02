import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, ScrollArea } from '@openui-org/react'
import { Overview } from '../overview'
import Sales from '../sales'

export default function Dashboard() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ligth">Download</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Sales />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-dark-900/90 border-dark-700/50">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3 bg-dark-900/90 border-dark-700/50">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription className="text-dark-300">
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              hOLA
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  )
}
