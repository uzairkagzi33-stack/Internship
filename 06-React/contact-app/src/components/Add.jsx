import React from 'react'

function Add({name, setName, phone, setPhone, contacts, setContacts }) {
    const handleAdd = () => {
        // Logic to add contact (e.g., save to state or backend)
        // After adding, navigate to the contact list
        // navigate("/list")
        setContacts([...contacts, {name, phone}])
    }
    return (
<>
    <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
    <input type='text' placeholder='Enter Phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}></input>
    <button onClick={handleAdd} >Add</button>
</>
)
}

export default Add