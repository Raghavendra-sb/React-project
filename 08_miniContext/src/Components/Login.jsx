import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext.js'//UserContext sae values fetch karane kae liyae use Context ka use kiya hai
//use Context ka use karne se hume context ki value mil jaegi jo ki UserContextProvider se mil rahi hai
function Login() {

    const[username, setUsername] = useState('')
    const[password,setPassword] = useState('')
//in this wht im excatly doing is im using the useContext hook to access the UserContext and update the user information in the state by setUser function

    const {setUser} = useContext(UserContext)
    const handleSubmit=(e)=>{
           e.preventDefault()//why preventDefault is used? because we don't want the page to reload on form submission 
           setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} 
       onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'/>
        <input type='text' value={password}
        onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )

}

export default Login