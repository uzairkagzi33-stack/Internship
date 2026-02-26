import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, LogInForm } from './components/index'
import './index.css' 
import HomeLayout from './HomeLayout'
import LogInLayout from './LogInLayout'
import { Route, Routes } from 'react-router'
// import App from './App.jsx'

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      children: [ { index: true, element: <Home /> }, 
        { path: 'about', element: <About /> } ]
    },
    {
      path: '/login',
      element: <LogInLayout />,
      children: [ { index: true, element: <LogInForm /> }, 
        { path: 'home', element: <Home /> } ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
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
    </BrowserRouter> */}
    <RouterProvider router={routes} />
  </StrictMode>,
)
