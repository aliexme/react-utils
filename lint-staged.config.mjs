export default {
  '*.{js,mjs}': ['yarn lint:check'],
  '*.{ts,tsx}': [() => 'yarn ts:check', 'yarn lint:check'],
}
