import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  let [count, setCount]=useState(0);
 
 
  const addValue = ()=> {
      if(count<20)
      {
        setCount(count+1);
      }
      else
      {
        count = 20
      }
  }

  const devValue = () => {
    
    if(count>0)
    {
      setCount(count-1)
    }
    else{
      count = 0;
    }
    
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>counter value : {count} </h2>
      <button onClick={addValue}>up</button> //why addValue not addValue()? because we are passing the function reference, not calling it immediately
      <button onClick={devValue}>down</button>
    </>
  )
}

export default App
