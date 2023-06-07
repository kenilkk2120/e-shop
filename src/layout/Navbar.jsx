import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Redux Toolkit</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link text-light" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link text-light">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link text-light">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/showuserdata"} className="nav-link text-light">User_Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/jsonUser"} className="nav-link text-light">Json_User</Link>
                            </li>
                        </ul>
                        <div className="userData d-flex justify-content-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={"/dashboard"} className="nav-link text-light">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link text-light">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;  