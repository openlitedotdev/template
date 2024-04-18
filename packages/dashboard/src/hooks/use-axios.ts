import axios from 'axios'
import { VERSION_API } from '@/lib/const'

export function useAxios() {
  const baseURL = `https://api-commerce.up.railway.app/api/${VERSION_API}`

  const instance = axios.create({
    baseURL,
  })

  return instance
}
