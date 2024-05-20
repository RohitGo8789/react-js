import { useState, useCallback , useEffect, useRef} from 'react'


function App() {
  const[length, setLength] = useState(0);
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

    //useRef hook
    const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "@!$#%^&*(){}[]?/<>"  

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  }, [password])




  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 font-semibold'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 mb-1 rounded-l-lg"
        placeholder="Password"
        readOnly 
        ref = {passwordRef}
      />
      <button
      onClick={copyPasswordToClipBoard}
      className='outline-none  bg-blue-800 text-white  px-3 py-1 mb-1 shrink-0 rounded-r-lg hover:bg-blue-500'
      >Copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {numAllowed}
          id='numberInput'
          onChange={(e)=>{
            setNumAllowed((prev) => !prev)
          }}
          />
          <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id='charInput'
          onChange={(e)=>{
            setCharAllowed((prev) => !prev)
          }}
          />
          <label>Characters</label>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
