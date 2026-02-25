import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{ BrowserRouter, createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
[
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <BrowserRouter> */}
    {/* <Routes>
      <Route path='/' element={<Layout />}>  //* Base URL endpoint is '/' and it will render the Layout component.
        <Route index element={<Home />} />   //* This is the default route for the base URL. When the user visits '/', the Home component will be rendered inside the Layout component.
        <Route path='about' element={<About />} /> //* When the user visits '/about', the About component will be rendered inside the Layout component.
      </Route>//*This Works!
    </Routes>  */} 

      {/* <App /> */}
      {/* <Layout router = {route}/> */}
      <RouterProvider router={router} /> 
      {/* <App /> */}
     {/* </BrowserRouter> */}
  </StrictMode>
)
