import { useState } from "react"

function App() {
  const [color,setColor] = useState("black");

  return (
  //  <div className="w-full h-screen "
  //  style={{backgroundColor:color}}>

  //  </div>
  <div className= "w-full h-screen text-white text-2xl p-5"
  style={{backgroundColor:"black"}}>
  Tailwind is working!
</div>
  )
}

export default App
