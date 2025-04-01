import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/theme.js'
import { useEffect } from 'react'
import ThemeBtn from './Components/ThemeBtn.jsx'
import Card from './Components/Card.jsx'

function App() {
   const [themeMode , setThemeMode]= useState("light")
const lightTheme = () =>{
  setThemeMode("light")
}
const darkTheme = () =>{
  setThemeMode("dark")
}
//actual change in Theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark");
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
   <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     {/* theme */}  
                     <ThemeBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*  */}   
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
