import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  jsx: true,
  ignores: ['api', '*.toml'],
})
