import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-6 rounded-2xl'>Tailwind</h1>
      
      <Card />
      <Card />

      
      
    </>
  )
}

export default App
