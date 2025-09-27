import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages when building in CI.
  // If building on GitHub Actions, infer repo name from GITHUB_REPOSITORY (owner/repo)
  // and use "/repo/" as base. Locally, default to "/".
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY
    if (!repo) return '/'
    const parts = repo.split('/')
    if (parts.length !== 2) return '/'
    const [, name] = parts
    // Special case: username.github.io repositories should use root '/'
    if (name.endsWith('.github.io')) return '/'
    return `/${name}/`
  })(),
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',   // 👈 add this line
  },
})
