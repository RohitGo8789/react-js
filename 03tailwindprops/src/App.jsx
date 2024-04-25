import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Rohit",
    age: 21
  }
  

  return (
    <>
    <h1 className="bg-red-600 rounded-xl w-full p-3 text-black" >Tailwind Test</h1>
   
    <Card username="chai aur code" btnText="Click Me!"/>
    <Card username="Rohit Goswami" btnText="Click Me!" />
    </>
  )
}

export default App
