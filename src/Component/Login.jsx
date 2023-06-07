import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginData = useSelector((state) => state?.auth?.data)
    console.log('loginData', loginData)
    useEffect(() => { }, [])

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="loginPage position-absolute top-50 start-50 translate-middle">
                        <div className="text-center border border-dark text-bg-primary rounded-top">
                            <p className="fs-4 mt-2 fw-semibold">Login</p>
                        </div>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            validationSchema={Yup.object().shape(
                                {
                                    email: Yup.string().required('Enter Email'),
                                    password: Yup.string().required('Enter Password '),
                                }
                            )}
                            onSubmit={(values) => {
                                const data = {
                                    email: values.email,
                                    password: values.password
                                }
                                dispatch(login({ data, navigate }))
                            }}
                        >
                            {({ errors, handleChange, handleBlur, values, handleSubmit, dirty, isValid }) => {
                                return (
                                    <Form className="border border-dark p-3 rounded-bottom" onSubmit={handleSubmit}>
                                        <div className="firstname">
                                            <label className="fw-semibold mb-2">UserName or Email</label><br />
                                            <input type="text" className="form-control border border-dark rounded-2 mb-2" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                            <ErrorMessage name="email" component="p" className="text-danger m-0" />
                                        </div>

                                        <div className="lasttname">
                                            <label className="fw-semibold mb-2">Password</label><br />
                                            <input type="password" className="form-control border border-dark rounded-2 mb-2" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                            <ErrorMessage name="password" component="p" className="text-danger m-0" />
                                        </div>

                                        <div className="loginbutton text-center">
                                            <button type="submit" className="btn btn-primary mt-3 px-5" > Login</button>
                                        </div>
                                        <div className="registerbutton text-center d-flex justify-content-center mt-3">
                                            <p className="fw-semibold">Need an account?</p>
                                            <Link to={"/register"}>
                                                <p className="px-2 fw-semibold">Register now</p>
                                            </Link>

                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div >
                </div >
            </Layout>
        </>
    )
}

export default Login;