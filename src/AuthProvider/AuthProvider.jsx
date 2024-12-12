import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)


    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const loginGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginGoogle,
        logout,

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return unSubscribe();
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;