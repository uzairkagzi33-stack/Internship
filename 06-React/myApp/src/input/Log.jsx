import { useEffect } from "react"
const Log = (props) =>{

    useEffect(() => {
        if(props.count === 10){
            alert('positive 10')
                }
                
                if(props.count < 0){
                    alert('Zero')
                }
            },[props.count])
        }
export default Log