import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Register />
  )
}

export default App
