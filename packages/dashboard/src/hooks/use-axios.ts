import axios from 'axios'

export function useAxios() {
  const baseURL = 'https://api-commerce.up.railway.app/api'

  const instance = axios.create({
    baseURL,
  })

  return instance
}
