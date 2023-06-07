import React, { useEffect } from "react";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSingleData } from "../store/listUser";

const UserDetails = () => {

    const dispatch = useDispatch();

    const { data } = useSelector((state) => ({
        data: state?.listUser?.singleUserData?.data
    }));

    console.log("list",data)

    const { id } = useParams();

    useEffect(() => {
        if (id)
            dispatch(userSingleData({ id }))
    }, [id])

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="titleName mt-5">
                        <h2 className="text-primary">User Details</h2>
                    </div>
                    <div className="userDetails">
                        <div className="row">
                            <div className="col-6 mt-4">
                                <div className="card">
                                    <img
                                        src={data?.avatar}
                                        className="card-img-top"
                                        alt="..."
                                        style={{height:"400px"}}
                                    />
                                </div>
                            </div>

                            <div className="col-6 mt-4">
                                <div className="card-body">
                                    <p className="card-text fw-semibold">
                                        First Name : {data?.first_name}
                                    </p>
                                    <p className="card-text fw-semibold">
                                        Last Name : {data?.last_name}
                                    </p>
                                    <p className="card-text fw-semibold">
                                        Email : {data?.email}{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout >
        </>
    )
}
export default UserDetails;