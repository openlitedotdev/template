import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    'flexbox': 'flex justify-center items-center',
    'flexbox-col': 'flex flex-col justify-center items-center',
    'input-border': ' border border-[#E4E7E9] rounded-[8px] shadow-sm box-border pl-10 py-1',
    'text-sad': 'text-[#8B8E99]',
    'flex-and-col': 'flex flex-col',
    'text-blue': 'text-[#3858D6]',
    'position-icons': 'absolute top-1/2 transform -translate-y-1/2 left-3',
  },
})
