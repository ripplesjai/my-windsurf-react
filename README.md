# React + Vite
  
  [![CI/CD Pipeline](https://github.com/ripplesjai/my-windsurf-react/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ripplesjai/my-windsurf-react/actions/workflows/ci.yml)
  
  This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
  
  Currently, two official plugins are available:
  
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
  ## React Compiler
  
  The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
  
  ## Expanding the ESLint configuration
  
  If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Project Guide

This repository contains a React application bootstrapped with Vite, configured with:

- React 19 + Vite 7
- Vitest + Testing Library
- ESLint 9
- GitHub Actions CI/CD (lint, test, build)
- GitHub Pages deployment

## Requirements

- Node.js 18 or 20
- npm 9+

## Getting Started

- Install dependencies
  - npm ci

- Run the dev server
  - npm run dev

Open http://localhost:5173 in your browser.

## Scripts

- Dev server
  - npm run dev

- Production build
  - npm run build

- Preview production build locally
  - npm run preview

- Lint
  - npm run lint

- Tests (watch)
  - npm run test

- Tests (CI mode)
  - npm run test:ci

## Testing Setup

Vitest is configured with jsdom and a setup file:

- vite.config.js → `test.environment = 'jsdom'`, `test.setupFiles = './setupTests.js'`
- setupTests.js → extend test matchers (e.g., jest-dom)

Run tests locally:

- npm run test

## CI/CD with GitHub Actions

Workflow: `.github/workflows/ci.yml`

- Triggers: push to `main`/`develop`, PRs to `main`
- Matrix: Node 18.x and 20.x
- Steps: Checkout → Setup Node → npm ci → Lint → Test → Build
- Artifacts: `dist/` uploaded from Node 20.x build
- Deployment: GitHub Pages on push to `main`

## GitHub Pages Deployment

- Vite base path is set automatically in `vite.config.js` using `GITHUB_REPOSITORY` so assets work at `https://<user>.github.io/<repo>/`.
- SPA routing is enabled by copying `index.html` to `404.html` during deploy.
- Enable Pages in GitHub: Settings → Pages → Source = GitHub Actions.

After a successful run on `main`, the workflow will print the page URL in the "Deploy to GitHub Pages" step output.

## Troubleshooting

- Blank page on GitHub Pages
  - Ensure the build base path is correct (handled in `vite.config.js`).
  - Clear browser cache and hard reload.

- Actions not deploying
  - Confirm Settings → Pages is set to GitHub Actions.
  - Check that the workflow ran on branch `main` and succeeded.
