import React from "react";
import NameContext from "./NameContext";
import { Children } from "react";
export const NameProvider =({children}  ) => {
    const [name,setName] = React.useState([])
    return(
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}