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

    // create function to shARE email and password create
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create login

    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create logout
    const logOut=()=>{
       return signOut(auth);
    }


    // manage user
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
         return unSubscribe();
        }
    },[])
    


    // pass function through context in compo
    const authInfo ={
      user,
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