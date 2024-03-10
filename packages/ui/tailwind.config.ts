import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url("../../public/jpg/bghome4.jpg")',
      },
      colors: {
        'gray': '#F5F5F7',
        'black': '#000000',
        'white': '#FFFFFF',
        'purple': '#3858D6',
        'indigo': '#d2d2d7',
        'gray-dark': '#8B8E99',
        'blue-dark': '#3858D6',
      },
    },
  },
  plugins: [],
}
export default config
