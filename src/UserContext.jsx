import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    return (
        <UserContextProvider value={}>{children}</UserContextProvider>
    )
}


