import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  typescript: true,
  jsx: true,
  rules: {
    'node/prefer-global/process': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
