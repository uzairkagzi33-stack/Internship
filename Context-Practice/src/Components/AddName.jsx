import React from 'react'
import NameContext from '../Context/NameContext'
import { useNavigate } from 'react-router-dom';

function AddName() {
    const navigate = useNavigate();
    const {name, setName} = React.useContext(NameContext)
    const [input, setInput] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setName([...name, input])
        setInput('')
        navigate('/list')
    }
    return (
    <><div>AddName</div><input type='text' value={input} onChange={(e) => setInput(e.target.value)} /><button onClick={handleSubmit}>Add Name</button></>

)
}

export default AddName