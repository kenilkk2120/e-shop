import React, { useEffect } from "react";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart, jsonSingleData } from "../store/jsonUser";

const JsonSingleData = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { jsonData } = useSelector((state) => ({
        jsonData: state?.jsonUser?.data
    }));

    // handle add to cart action
    const handleAddToCart = (e,items) => {
        e.preventDefault()
        console.log(items)
        dispatch(addToCart({ data: items}))
        navigate('/addToCart')
    }


    useEffect(() => {
        if (id)
            dispatch(jsonSingleData({ id }))
    }, [id])

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="titleName mt-5">
                        <h2 className="text-primary">Json Data Details</h2>
                    </div>
                    <div className="userDetails">
                        <div className="row">
                            <div className="col-6 mt-4 px-5">
                                <div className="card">
                                    <img
                                        src={jsonData.thumbnail}
                                        className="card-img-top w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className="col-6 mt-4 px-5">
                                <div className="card-body ">
                                    <p className="card-title my-2 fs-2 fw-semibold">
                                        {jsonData.title}
                                    </p>
                                    <p className="card-text fs-2">
                                        {jsonData.brand}
                                    </p>
                                    <p className="card-text fw-semibold fs-4">
                                        ${jsonData.price}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-semibold">Description</span><br />
                                        {jsonData.description}
                                    </p>

                                    <p className="card-text">
                                        <span className="fw-semibold">Category</span><br />
                                        {jsonData.category}
                                    </p>
                                    <p className="card-text">
                                        <span className="fw-semibold">Stock : </span>
                                        {jsonData.stock}
                                    </p>
                                </div>
                                <button type="button" className="btn btn-primary my-3 fw-semibold px-5 py-2"
                                onClick={(e) => handleAddToCart(e,jsonData)}
                                >
                                    <span className="fs-5 px-2"><i class="bi bi-bag"></i></span>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}
export default JsonSingleData;