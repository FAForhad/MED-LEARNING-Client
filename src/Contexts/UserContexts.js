import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app);


const UserContexts = ({ children }) => {

    const user = { name: 'akaash' }

    const info = { user }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;