import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";

const Dashboard = () => {

    // onClick={() => {
    //     localStorage.clear();
    //     navigate("/");
    // }}
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="data mt-5">
                        <label className="email fw-semibold fs-5">UserName</label> <br />
                        <p>{1342354654}</p>

                        <button className="btn btn-primary mt-3" >Logout</button>

                    </div>
                </div >
            </Layout>
        </>
    )
}

export default Dashboard;