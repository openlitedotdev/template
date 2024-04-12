import type { Config } from 'tailwindcss'
import { react } from '@openui-org/react/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@openui-org/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { },
  },
  plugins: [react],
}
export default config
