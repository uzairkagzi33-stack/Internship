import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Home, About, LogInForm } from './components/index'
import './index.css' 
import HomeLayout from './HomeLayout'
import LogInLayout from './LogInLayout'
import { Route, Routes } from 'react-router'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/login' element={<LogInLayout />} >
          <Route index element={<LogInForm />} />
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
)
