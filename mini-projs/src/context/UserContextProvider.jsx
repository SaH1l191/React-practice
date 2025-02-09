
// 1st way of setting up useCOntext 

import { useState } from "react"
import UserContext from "./ThemeContext"



const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{ setUser, user }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider