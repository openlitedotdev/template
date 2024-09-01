import type { Config } from 'tailwindcss'
import { openui } from '@openlite/ui/tailwind'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@openlite/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { },
  },
  plugins: [openui()],
}
export default config
