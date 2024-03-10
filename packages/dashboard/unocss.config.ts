import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    'flexbox': 'flex justify-center items-center',
    'flexbox-col': 'flex flex-col justify-center items-center',
    'margin-label': ' mt-[15px] mb-[5px]',
    'input-border': ' border border-[#E4E7E9] rounded-[8px] shadow-sm box-border pl-[50px]',
    'text-sad': 'text-[#8B8E99]',
    'flex-col': 'flex flex-col',
    'text-blue': 'text-[#3858D6]',
  },
})
