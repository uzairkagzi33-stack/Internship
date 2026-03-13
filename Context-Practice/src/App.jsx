import { NameProvider } from './Context/NameContextProvider'
import Layout from './Layout'
import './App.css'
import ListLayout from './ListLayout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={
   <NameProvider>
    <Layout />
   </NameProvider>
  } />
    <Route path='/list' element={
   <NameProvider>
    <ListLayout />
   </NameProvider>
  } />
  </Routes>
    </BrowserRouter>
  )
}

export default App
