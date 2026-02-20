import { useState } from 'react'

import './App.css'

function App() {
    const [color, setColor] = useState('blue')

    return(
    <>
        <div className='w-full h-screen flex flex-wrap justify-center items-end duration-600' style={{backgroundColor:color}}>
        <div className='flex flex-wrap mb-12 bg-amber-50 px-12 py-6 rounded-full ' >
            <button className=' bg-red-700 px-7 py-3 rounded-full shadow-2xl text-xl text-shadow-black text-white mx-2.5' onClick={()=>{
                setColor('red')
            }}>RED</button>
            <button className=' bg-blue-700 px-7 py-3 rounded-full shadow-2xl text-xl text-shadow-black text-white mx-2.5
            ' onClick={()=>{
                setColor('blue')
            }}>BLUE</button>
        </div>
        </div>
    </>
    )
}

export default App
