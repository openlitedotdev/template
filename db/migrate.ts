import 'dotenv/config'
import { resolve } from 'node:path'
import { migrate } from 'drizzle-orm/libsql/migrator'
import { db } from './index'

(async () => {
  try {
    await migrate(db, { migrationsFolder: resolve(__dirname, '../migrations') })
    // eslint-disable-next-line no-console
    console.log('Migration successful')
    process.exit(0)
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
