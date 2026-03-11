import React from 'react'
import { useNavigate } from 'react-router-dom'

function List({contacts}) {
    const navigate = useNavigate() 

    const handleAddContact = () => {
        navigate("/")
    }
    return (

<>
    <h1>Contact List</h1>
        {/* <div key={index}>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
        </div> */
    /* <ul>
            <li>Name: {contact.name}</li>
            <li>Phone: {contact.phone}</li>
        </ul> */}
            <ul>
    
                {contacts.map((contact, index) => (
                    <li key={index}>
                        Name: {contact.name}, Phone: {contact.phone}
                    </li>
                ))}
            </ul>

    <button onClick={handleAddContact}>Add Contact</button>
</>
)
}

export default List