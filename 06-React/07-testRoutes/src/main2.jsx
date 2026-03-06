// Import React core modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import routing utilities from react-router-dom
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import page components
import { Home, About, LogInForm } from './components/index'

// Import styles
import './index.css' 

// Import layout components
import HomeLayout from './HomeLayout'
import LogInLayout from './LogInLayout'

// Import Route and Routes (currently not in use)
import { Route, Routes } from 'react-router'
// import App from './App.jsx'

// Define application routes using createBrowserRouter
const routes = createBrowserRouter(
  [
    // Home route - displays HomeLayout with Home and About as child routes
    {
      path: '/',
      element: <HomeLayout />,
      children: [ 
        { index: true, element: <Home /> }, // Default route shows Home component
        { path: 'about', element: <About /> } // /about route shows About component
      ]
    },
    // Login route - displays LogInLayout with LogInForm and Home as child routes
    {
      path: '/login',
      element: <LogInLayout />,
      children: [ 
        { index: true, element: <LogInForm /> }, // Default login route shows LogInForm
        { path: 'home', element: <Home /> } // /login/home route shows Home component
      ]
    }
  ]
)

// Render the React application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Alternative routing configuration using BrowserRouter and Routes (commented out):
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
    */}
    {/* Provider component that enables routing functionality using the defined routes */}
    <RouterProvider router={routes} />
  </StrictMode>,
)
 