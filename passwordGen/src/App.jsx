// import { useState, useCallback,useEffect,useRef } from 'react'

// function App() {
//    const [length, setLength] = useState(8);
//    const [numberAllowed, setNumberAllowed]=useState(false);
//    const [ charAllowed, setCharAllowed]= useState(false);
//    const [password,setPassword]=useState("");

//    //useref hook
//    const passwordReff = useRef(null)
 
//    const passwordGenerator = useCallback( ()=>{
//     let pass = "";
//     let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) string+= "0123456789"
//     if(charAllowed) string+= "!@#$%^&*()_-+=[]{}|;:',.<>?/ ";
  
//     for(let i=1;i<length;i++){
//             let char = Math.floor(Math.random()*string.length+1);
//             pass += string.charAt(char);
//     }
//     setPassword(pass);
    
//    }, [length,numberAllowed,charAllowed,setPassword])

//  const copyPasswordToClipBoard = useCallback(()=>{
//   passwordReff.current?.select()
//   window.navigator.clipboard.writeText(password)
//  },[password])
//    useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
 
//    return (
//     <div className="  w-full max-w-md mx-auto shadow-md rounded-lg px-20 py-3 my-8 bg-gray-800 text-orange-500">
//       <h2 className="text-white text-center font-bold">Password Generator</h2>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           ref={passwordReff}
//           readOnly
//         />
//         <button onClick={copyPasswordToClipBoard}>copy</button>
//       </div>
//       <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//           <input type="range"
//           min={6}
//           max={100}
//           value={length}
//           className='cursor-pointer'
//           onChange={(e)=>{setLength(e.target.value)}}></input>
//           <label >Length:{length}</label>
//         </div>
//         <div className='flex items-center gap-x-1'>
//           <input
//           type='checkbox'
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={()=>{setNumberAllowed((prev)=>!prev)}}>
//           </input>
//           <label htmlFor='numberInput'>Numbers</label>
//         </div>
//         <div className='flex items-center gap-x-1'>
//           <input
//           type='checkbox'
//           defaultChecked={charAllowed}
//           id="charInput"
//           onChange={()=>{setCharAllowed((prev)=>!prev)}}>
//           </input>
//           <label htmlFor='numberInput'>Character</label>
//         </div>

//       </div>
//     </div>
//   );
  
// }

// export default App

import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_-+=[]{}|;:',.<>?/ ";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999); // Ensure selection on mobile
      navigator.clipboard.writeText(password);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-md shadow-md rounded-lg px-10 py-6 bg-gray-800 text-orange-500">
        <h2 className="text-white text-center font-bold text-xl mb-4">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-700 text-white"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button 
            onClick={copyPasswordToClipboard} 
            className="bg-orange-500 text-white px-4 py-2"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-y-3 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

