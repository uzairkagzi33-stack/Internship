import React from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Profile() {
    const { user } = useContext(UserContext);

    return (
    <div>
        <h1>Profile Page</h1>
        <p>Welcome to your profile, {user?.name}!</p>
    </div>    
)
}

export default Profile