import React, { createContext } from 'react';
import { getAuth, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);



const UserContexts = ({ children }) => {
    const user = { name: 'akaash' }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const register = () => {

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const info = { user, login, googleLogin, githubLogin }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;