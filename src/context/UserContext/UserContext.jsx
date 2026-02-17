import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;