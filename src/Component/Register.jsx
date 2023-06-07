import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Layout from "../layout";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [dateofbirth, setDateOfBirth] = useState("");
    const [country, setCountry] = useState("");

    const userData = () => {
        axios.post("http://localhost:3004/userdata", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender,
            dateofbirth: dateofbirth,
            country: country
        })
    }

    const url = "https://reqres.in/api/register";

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="registerPage">
                            <div className="text-center border border-dark text-bg-primary rounded-top">
                                <p className="fs-4 mt-2 fw-semibold">Register</p>
                            </div>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    password: "",
                                    gender: "",
                                    dateofbirth: "",
                                    country: ""
                                }}
                                validationSchema={Yup.object().shape(
                                    {
                                        firstName: Yup.string().required('Enter FirstName'),
                                        lastName: Yup.string().required('Enter LastName'),
                                        email: Yup.string().required('Enter Email'),
                                        password: Yup.string().required('Enter Password'),
                                    }
                                )}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values);
                                    const data = {
                                        email: values.email,
                                        password: values.password
                                    }
                                    axios.post(url, data);
                                }}>

                                {({ errors, handleChange, handleBlur, values, handleSubmit, dirty, isValid }) => {
                                    return (
                                        <form className="border border-dark p-3 rounded-bottom" onSubmit={handleSubmit}>
                                            <div className="row g-2">
                                                <div className="col">
                                                    <div className="firstname">
                                                        <label className="fw-semibold mb-2">First Name</label><br />
                                                        <input type="text" name="firstName" className="form-control border border-dark rounded-2 mb-2" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                                                        <ErrorMessage name="firstName" component={'p'} className="text-danger m-0 " />
                                                        {/* <p className="text-danger">{errors && (<>{errors.firstName}</>)}</p> */}
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="lastname">
                                                        <label className="fw-semibold mb-2">Last Name</label><br />
                                                        <input type="text" name="lastName" className="form-control border border-dark rounded-2 mb-2" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                                                        <ErrorMessage name="lastName" component={'p'} className="text-danger m-0" />
                                                        {/* <p className="text-danger">{errors && (<>{errors.lastName}</>)}</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="Email">
                                                <label className="fw-semibold mb-2">Email</label><br />
                                                <input type="email" className="form-control border border-dark rounded-2 mb-2" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} />
                                                <ErrorMessage name="email" component={'p'} className="text-danger m-0" />
                                                {/* <p className="text-danger">{errors && (<>{errors.email}</>)}</p> */}
                                            </div>

                                            <div className="lasttname">
                                                <label className="fw-semibold mb-2">Password</label><br />
                                                <input type="password" name="password" value={values.password} className="form-control border border-dark rounded-2 mb-2" onChange={handleChange} onBlur={handleBlur} />
                                                <ErrorMessage name="password" component={'p'} className="text-danger m-0" />
                                            </div>

                                            <div className="gender d-flex mt-2">
                                                <p className="fw-semibold">Gender</p>
                                                <div className="radio ms-3">
                                                    <input type="radio" name="gender" id="male" />
                                                    <label htmlFor="male" className="mx-2 fw-semibold">Male</label><br />
                                                    <input type="radio" name="gender" id="female" />
                                                    <label htmlFor="female" className="mx-2 fw-semibold">Female</label>
                                                </div>
                                            </div>

                                            <div className="dateOfBirth mt-3 ">
                                                <label className="fw-semibold me-3">DOB</label>
                                                <input type="date" className="ms-3 py-1" style={{ width: "80%" }} />
                                            </div>

                                            <div className="city mt-4">
                                                <label className="fw-semibold">Country</label>
                                                <select name="country" className="ms-2 py-1" style={{ width: "80%" }}>
                                                    <option>Select Country</option>
                                                    <option>INDIA</option>
                                                    <option>USA</option>
                                                    <option>AUSTRALIA</option>
                                                    <option>CANADA</option>
                                                    <option>UAE</option>
                                                </select>
                                            </div>

                                            <div className="registerbutton text-center mt-3">
                                                <button type="submit" className="btn btn-primary mt-3 px-5">Register</button>
                                            </div>

                                            <div className="text-center d-flex justify-content-center mt-3">
                                                <p className="fw-semibold">Already a user?</p>
                                                <Link to={"/"}>
                                                    <p className="px-2 fw-semibold">Login</p>
                                                </Link>
                                            </div>
                                        </form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div >
            </Layout>

        </>
    );
};
export default Register;