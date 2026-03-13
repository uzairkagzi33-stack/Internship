import React from 'react'
import NameContext from '../Context/NameContext'
import { useNavigate } from 'react-router-dom';

function NameList() {
    const navigate = useNavigate();
  const {name} = React.useContext(NameContext)
  const handleNavigate = () => {navigate('/')
  }


  return (
    <><div>NameList</div>
    <button onClick={handleNavigate}>Home</button>
    <ul>
        {name.map((n, index) => <li key={index}>{n}</li>)}
    </ul>
    </>
)
}

export default NameList