import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('token')
    useEffect(() => {
        if(isLoggedIn) navigate('/dashboard')
      },[isLoggedIn])
    return (
        <div>
            <Navbar />
            {children}

        </div>
    )
}
export default Layout