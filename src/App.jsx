import { useState } from 'react'
import React from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello Windsurf</h1>
        <p>This is a small test React app for CI.</p>
      </div>
    </>
  )
}

export default App
