import React,{ useState } from "react";

export const Authcontext = React.createContext();

export const AuthcontextProvider = ({children}) => {
    let [menu,setMenu] = useState(false);

    return(<Authcontext.Provider value={{menu,setMenu}}>
        {children}
    </Authcontext.Provider>)
}

