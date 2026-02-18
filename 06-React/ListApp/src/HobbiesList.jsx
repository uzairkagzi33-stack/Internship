// import { useState } from 'react'
import './App.css'

const HobbiesList = (props)=>{
    // const [hobbies,setHobbies] = useState([])
    // const [inputVal, setInputVal] = useState('')
    

    const handleAddHobbie = () => {
        if(!props.inputVal.trim()) return;

        const newHobby = {
            id: Date.now(),
            text: props.inputVal
        };
        
        
        const isDuplicate = props.hobbies.some(element => element.text.toLowerCase() === newHobby.text.toLowerCase());
        
        if(isDuplicate) {
            alert("This hobby has already been added!");
            return;
        }

        props.setHobbies([...props.hobbies, newHobby]);
        props.setInputVal('');
    };
    const handleDeleteHobby = (idToDelete)=>{
        const updatedHobbies = props.hobbies.filter((hobby)=> hobby.id !== idToDelete);
        props.setHobbies(updatedHobbies);
    }

    // console.log(hobbies);

    return(
        <>
            <h2>My Hobbies</h2>
            <input type='text' className='inputBox' placeholder='Enter Hobbies.' value={props.inputVal} onChange={(e)=>props.setInputVal(e.target.value)}></input>
            <button onClick={handleAddHobbie}>Add</button>

            {(props.hobbies.length === 0 )?(<p style={{color:"red"}}>No hobbies added yet.</p>):(
                <ul>
                    {props.hobbies.map((hobby) => (
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
