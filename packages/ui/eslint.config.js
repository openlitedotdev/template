import eslint from '@antfu/eslint-config'

export default eslint({
  componentExts: ['next/core-web-vitals'],
  react: true,
  formatters: true,
  jsx: true,

  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
