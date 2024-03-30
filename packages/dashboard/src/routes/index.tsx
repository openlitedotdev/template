import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@openui-org/react'
import { CreditCard, DollarSign, LineChart, UsersRound } from 'lucide-react'
import { useAdmin } from '@/stores/admin'
import LateralMenu from '@/components/LateralMenu'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const admin = useAdmin(state => state.credentials)
  const navigate = useNavigate({ from: '/' })

  useEffect(() => {
    if (!admin)
      navigate({ to: '/login' })
  }, [admin])

  return (
    <>
      <div className="flex justify-between p-10">
        <LateralMenu />
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
            <Card className="bg-dark-900/90 border-dark-700/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-dark-300">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/90 border-dark-700/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Subscriptions
                </CardTitle>
                <UsersRound />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-dark-300">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/90 border-dark-700/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">Sales</CardTitle>
                <CreditCard className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-dark-300">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-900/90 border-dark-700/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Active Now
                </CardTitle>
                <LineChart className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-dark-300">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-dark-900/90 border-dark-700/50">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                Hola
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
      </div>
    </>
  )
}
