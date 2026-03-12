import React, {useState} from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Login() {
    const { setUser } = useContext(UserContext);
    const { user } = useContext(UserContext);
    // const [username, setUsername] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        setUser({ name: username });
        console.log('User logged in');
    }
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    return (
        <>
            <input type="text" placeholder="Username" value={user?.name } onChange={(e) => {{setUsername(e.target.value); console.log(e.target.value);}} } />
            {/* <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}

            <button onClick={handleLogin}>Login</button>
        </>
)
}

export default Login