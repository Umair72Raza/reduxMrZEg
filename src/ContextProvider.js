import { useState } from "react"
import { myContext } from "./context/context"

export const ContextProvider = ({children}) => {
    const [text,setText] = useState()
    //only the children passed in this provider will be given acccess to data
return (<myContext.Provider value={{text,setText}} > 
    {children}
</myContext.Provider>)
}

export default ContextProvider