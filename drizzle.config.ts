import { defineConfig } from 'drizzle-kit'

import 'dotenv/config'

export default defineConfig({
  schema: './db/schemas/*',
  dialect: 'sqlite',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
})
