import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Register'
import axios from 'axios'

function App() {
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;
  return (
      <Register />
  )
}

export default App
