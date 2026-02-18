import { useState } from 'react';
import HobbiesList from './HobbiesList';
import './App.css';

function App() {
    const [hobbies, setHobbies] = useState([]);
    const [inputVal, setInputVal] = useState('');

    return (
    <div className="App">
        <HobbiesList hobbies={hobbies} setHobbies={setHobbies} inputVal={inputVal} setInputVal={setInputVal} />
    </div>
    );
}

export default App;