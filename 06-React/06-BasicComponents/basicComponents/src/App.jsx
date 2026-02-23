// import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {


  return (
    <>
      <div
      className='flex flex-col items-center justify-center gap-4 p-4'
      >
        <Card 
        title="Welcome to My App" 
        content="This is a sample card component." />


        <Card 
        title="This is the second card" 
        content="this is the description of the second card" />
      </div>
      
    </>
  )
}

export default App
