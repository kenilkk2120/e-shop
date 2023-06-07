import React, { useEffect } from "react";
import Layout from "../layout";
import { jsonCartData } from "../store/jsonUser";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { cartData } = useSelector((state) => ({
        cartData: state?.jsonUser?.cart,
    }));

    console.log('cartData',cartData)
    


    return (
        <>
            <Layout>
                <div className="container">
                    <div className="titleName mt-5">
                        <h2 className="text-primary">Your Cart</h2>
                    </div>
                    <div className="userDetails">
                        <div className="row">
                            <div className="col-6 mt-4 px-5">
                                <div className="card">
                                    <img
                                        src={cartData?.thumbnail}
                                        className="card-img-top w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className="col-6 mt-4 px-5">
                                <div className="card-body ">
                                    <p className="card-title my-2 fs-2 fw-semibold">
                                        {cartData?.title}
                                    </p>
                                    <p className="card-text fs-2">{cartData?.brand}</p>
                                    <p className="card-text fw-semibold fs-4">
                                        ${cartData.price}
                                    </p>
                                    <div className="addItem d-flex ">
                                        <button type="button" className="btn btn-dark">
                                            <i class="bi bi-plus-lg"></i>
                                        </button>
                                        <p className="fw-semibold px-3 fw-bold border border-dark mx-2">
                                            01
                                        </p>
                                        <button type="button" className="btn btn-dark">
                                            <i class="bi bi-dash-lg"></i>
                                        </button>
                                    </div>

                                    <p className="fw-semibold my-3 fs-5">
                                        Total Amount <br /> 
                                        { }
                                    </p>

                                    <Link
                                        to={""}
                                        className="btn btn-primary my-3 fw-semibold py-2 px-5"
                                    >
                                        Confirm Order
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default AddToCart;
