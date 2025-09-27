import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'    

test('renders hello text', () => {
  render(<App />)
  expect(screen.getByText(/hello windsurf/i)).toBeInTheDocument()
})
