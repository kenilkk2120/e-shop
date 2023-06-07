import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../layout/Navbar";

const ProtectedRoute = ({ isLoggedIn , children }) => {
    if(!isLoggedIn) { return <Navigate to={'/'} replace  />}
   

    return children 
}

export default ProtectedRoute;