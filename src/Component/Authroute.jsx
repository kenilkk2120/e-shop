import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Authroute = () => {

    const navitage = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password')
        if (email && password) {
            navitage("/dashboard");
        }
    }, [])

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Authroute;
