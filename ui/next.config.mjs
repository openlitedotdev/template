import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {}

// note: the if statement is present because you
// only need to use the function during development
if (process.env.NODE_ENV === 'development')
  await setupDevPlatform()

export default nextConfig
