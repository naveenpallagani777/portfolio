import React,{ useState } from "react";

export const Authcontext = React.createContext();

export const AuthcontextProvider = ({children}) => {
    let [mode, setMode] = useState("text-white bg-gray-700");

    return(<Authcontext.Provider value={{mode, setMode}}>
        {children}
    </Authcontext.Provider>)
}

