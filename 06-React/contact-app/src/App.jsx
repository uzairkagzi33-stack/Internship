import { useState } from 'react'
import Add from './components/Add'
import List from './components/List'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [contacts, setContacts] = useState([])
  return (
    <>
    <Add name={name} setName={setName} phone={phone} setPhone={setPhone} contacts={contacts} setContacts={setContacts} />
    <List contacts={contacts} />
    </>
  )
}

export default App
