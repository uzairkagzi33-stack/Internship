// import { useState } from 'react'
import './App.css'

const HobbiesList = ({hobbies,setHobbies,inputVal,setInputVal})=>{ //? Extracting props.
    // const [hobbies,setHobbies] = useState([])
    // const [inputVal, setInputVal] = useState('')
    

    const handleAddHobbie = () => {
        if(!inputVal.trim()) return;

        const newHobby = {
            id: Date.now(),
            text: inputVal
        };
        
        
        const isDuplicate = hobbies.some(element => element.text.toLowerCase() === newHobby.text.toLowerCase());
        
        if(isDuplicate) {
            alert("This hobby has already been added!");
            return;
        }

        setHobbies([...hobbies, newHobby]);
        setInputVal('');
    };
    const handleDeleteHobby = (idToDelete)=>{
        const updatedHobbies = hobbies.filter((hobby)=> hobby.id !== idToDelete);
        setHobbies(updatedHobbies);
    }

    // console.log(hobbies);

    return(
        <>
            <h2>My Hobbies</h2>
            <input type='text' className='inputBox' placeholder='Enter Hobbies.' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}></input>
            <button onClick={handleAddHobbie}>Add</button>

            {(hobbies.length === 0 )?(<p style={{color:"red"}}>No hobbies added yet.</p>):(
                <ul>
                    {hobbies.map((hobby) => (
                        <li key={hobby.id}>
                            {hobby.text}
                            <button onClick={() => handleDeleteHobby(hobby.id)}>del</button>
                        </li>
                    ))} 
                </ul>
            )}
        </>
    )
    
}
export default HobbiesList;
