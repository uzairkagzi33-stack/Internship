import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HobbiesList from './HobbiesList.jsx'
import App from './App.jsx'
// import { useState } from 'react'

    // const [hobbies,setHobbies] = useState([])
    // const [inputVal, setInputVal] = useState('')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HobbiesList hobbies={hobbies} setHobbies={setHobbies} inputVal={inputVal} setInputVal={setInputVal} /> */}
  </StrictMode>,
)
