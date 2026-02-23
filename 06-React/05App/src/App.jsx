import { useState, useEffect, useCallback} from "react";
import "./App.css";

function App() {
  
  const [pass, setPass] = useState('')
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8)

  const SetPassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numAllowed){
      str += '0987654321'
    }
    if(charAllowed){
      str += '!@#$?*'
    }

    let pas = ''
    for(let i = 0; i < length; i++){
      pas += str[Math.floor(Math.random() * str.length)];
    }
    setPass(pas)
  }, [numAllowed, charAllowed, length])
  
  const copyPassword = () => {
    navigator.clipboard.writeText(pass)
    alert("Password copied to clipboard!")
  }
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    SetPassword();
      }, [SetPassword, numAllowed, charAllowed, length]); 

  return (
    <>
      <div className="flex justify-center items-center bg-gray-900 h-screen w-full text-white">
        <div className="flex flex-col gap-3">
          <div className="flex w-full gap-3 ">
            <input
              type="text"
              name="pass"
              value={pass}
              className="bg-gray-400 rounded-xl outline-none px-2.5 py-1.5 text-gray-800"
              readOnly
            />
            <button 
              className="px-2.5 py-1.5 bg-blue-600  rounded-xl text-white hover:bg-blue-800 cursor-pointer"
              onClick={copyPassword}
            >
              copy!
            </button>
          </div>
          <div className="flex w-full gap-3 ">
            <input type="range" min={8} max={20} id="counter" value={length} onChange={(e)=>{setLength(Number(e.target.value))}}></input>
            <label htmlFor="counter">Length : {length}</label>
          </div>
          <div className="flex w-full gap-3 ">
            <input type="checkbox" id="isNumAllowed" checked={numAllowed}
            onChange={()=>{setNumAllowed((prev)=>(!prev))}}
            ></input>
            <label htmlFor="isNumAllowed">Numbers</label>
            <input type="checkbox" id="isCharAllowed" checked={charAllowed}
            onChange={()=>{setCharAllowed((prev)=>(!prev))}}
            ></input>
            <label htmlFor="isCharAllowed">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
