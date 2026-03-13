import { createContext } from "react";
const NameContext = createContext()

export default NameContext
// export const NameProvider = ({children}) => {
//     const [name, setName] = React.useState('')
//     return (
//         <NameContext.Provider value={{name, setName}}>
//             {children}
//         </NameContext.Provider>
//     )
// }
