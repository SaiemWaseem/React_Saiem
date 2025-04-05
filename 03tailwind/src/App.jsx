import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-500 text-white rounded-lg p-4">
      Saiem Aur React
      </h1>
      <Card username ="Sami" btnText ="View"/>
      <Card username ="Saiem" btnText ="Visit"/>

      
    </>
  )
}

export default App
