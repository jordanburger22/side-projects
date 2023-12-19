import { createContext, useContext } from "react";
import { useMemeList, useMemes } from "../Hooks";


export const MemeContext = createContext()


export const MemeContextProvider = ({children}) => {

    const memeAPI = useMemes()

    const memeListAPI = useMemeList()


    return (
        <MemeContext.Provider value= {{memeAPI, memeListAPI}}>
            {children}
        </MemeContext.Provider>
    )
}


export const useMemeContext = () => useContext(MemeContext)