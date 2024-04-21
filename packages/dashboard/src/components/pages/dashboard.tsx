import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, ScrollArea } from '@openui-org/react'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { Overview } from '../overview'
import Sales from '../sales'
import Layout from '@/layouts/layout'
import { useAdmin } from '@/stores/use-admin'

export default function Dashboard() {
  const admin = useAdmin()
  const [_, setLocation] = useLocation()

  useEffect(() => {
    if (!admin.credentials)
      setLocation('/login')
  }, [admin.credentials])

  return (
    <Layout>
      <ScrollArea className="h-full">
        {admin.credentials && (
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Hi, Welcome back
                {' '}
                {admin.credentials!.name}
                {' '}
                👋
              </h2>
              <div className="hidden md:flex items-center space-x-2">
                <Button className="bg-sky text-white">Download</Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Sales />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  hOLA
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </ScrollArea>
    </Layout>
  )
}
