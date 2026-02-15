import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [token,setToken]=useState(()=>localStorage.getItem("token")??null)
    const [username,setUsername]=useState(()=>localStorage.getItem("username")??null)
    const navigate=useNavigate()
    const SignIn=(token,data)=>{
           localStorage.setItem("token",token)
           localStorage.setItem("username",data.firstName)
             setToken(token);       // update state
    setUsername(data.firstName); // update state
    toast.success("login successful")
     navigate('/mainpage')
    }
    const SignOut=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setToken(null)
        setUsername(null)
        toast.success("logged out successfully")
        navigate('/mainpage')
    }
    return(
        <AuthContext.Provider value={{token,SignIn,SignOut,username,setUsername}}>
          {children}
        </AuthContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider
