// import {useState } from "react";


const FormItem = (props)=> {
    // const [count, SetCount] = useState(0)


            
    
    return(
        <>
            <p>Count : {props.count}</p>
            {/* <input value={inputValue}  onChange={(e)=>SetInputValue(e.target.value)}/> */}
            {/* <input value={props.defaultValue}/> */}
            <button onClick={()=> props.SetCount(props.count+1)}>+</button>
            <button onClick={()=> props.SetCount(props.count > 0 ? props.count-1: props.count)} style={{marginLeft:"5px"}}>-</button>
            
        </>
    )
};
export default FormItem 