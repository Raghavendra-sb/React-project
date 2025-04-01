import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile.jsx'
import Login from './Components/Login.jsx'
function App() {


  return (
    <UserContextProvider>
   <h1>Context API</h1>
<Login/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
