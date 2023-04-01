export default {
  '*.{js,mjs}': ['pnpm lint:check'],
  '*.{ts,tsx}': [() => 'pnpm ts:check', 'pnpm lint:check'],
}
