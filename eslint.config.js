import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  jsx: true,
  ignores: ['api', '*.toml'],
  rules: {
    'node/prefer-global/process': 'off',
    'eslint-comments/no-unused-disable': 'off',
  },
})
