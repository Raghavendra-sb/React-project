import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [ charAllowed, setCharAllowed]= useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator = useCallback(fn , [length,numberAllowed,charAllowed,setPassword])
{
  let pass = "";
  let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*()_-+=[]{}|;:',.<>?/ ";

  for(let i=1;i<length;i++){
          let char = Math.floor(Math.random()*string.length+1);
          pass = string.charAt(char);
  }
  setPassword(pass);
  
}


return (
  <>
    <div className='text-9xl text-blue-700'>test</div>
  </>
);
}

export default App
