import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  
  // let counter = 15;

  const addValue = () =>{
    // console.log(counter);
    // counter+=1;
    if(counter<=19){
      setCounter(counter+1);
    }
  }

  const removeValue = () =>{
    // console.log(counter);
    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
    <h1>Counter App</h1>
    <button>Current Value {counter}</button>
    <br />
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
