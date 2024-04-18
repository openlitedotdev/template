import Routes from './routes'
import { Toaster } from '@/components/utils/sonner'

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes />
    </>
  )
}
