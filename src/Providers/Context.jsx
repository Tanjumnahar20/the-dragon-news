/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Context = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    // create function to shARE email and password create
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create login

    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create logout
    const logOut=()=>{
        setLoading(true)
       return signOut(auth);
    }


    // manage user
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
         return unSubscribe();
        }
    },[])
    


    // pass function through context in compo
    const authInfo ={
      user,
      loading,
      createUser,
      logIn,
      logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;