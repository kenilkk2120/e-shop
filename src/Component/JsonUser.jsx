import React from "react";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jsonUserData } from "../store/jsonUser";
import { Link } from "react-router-dom";

const ShowJsonUser = () => {
  const dispatch = useDispatch();

  const { totalPages, jsonData, searchData } = useSelector((state) => ({
    jsonData: state?.jsonUser?.data?.products,
    // searchData: state?.jsonUser?.data,
    totalPages: state?.jsonUser?.data?.total,
  }));
  // const jsonData = useSelector((state) => (state?.jsonUser?.data?.products))

  console.log("JsonUserData132", jsonData);

  const [userImage,setUserImage] = useState(null)
  const [showUserImage,setShowUserImage] = useState(null)
  console.log('userImage',userImage,showUserImage)
  const [page, setPage] = useState(0);
  const [search, setserach] = useState("");
  const [product, setProduct] = useState([
    { title: "I Phone 7", price: 10000, qty: "" },
    { title: "I Phone 8", price: 20000, qty: "" },
    { title: "I Phone 8", price: 30000, qty: "" },
    { title: "I Phone 10", price: 40000, qty: "" },
  ]);

  const handleLoadMore = (event) => {
    event.preventDefault();
    setPage((prevPage) => prevPage + 12);
  };

  const getTotalAmpont = () => {
    const price = product.map(item => item.price)
    // const aa = price.reduce((a,b) => a + b,0)
    var sum = price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0);
    console.log('price', sum)
    return sum
  }


  const handleAddMore = (index) => {
    const tempArr = [...product]
    tempArr[index].price = tempArr[index].price + 20000
    console.log('tempArr', tempArr)
    setProduct(tempArr)
  }

  useEffect(() => {
    dispatch(jsonUserData({ search, page }));
  }, [search, page]);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="titleName mt-5">
            <h2 className="text-primary">Json Data</h2>
          </div>
          <input type="file" onChange={(e) => {
            setUserImage(e.target.files[0])
            setShowUserImage(URL.createObjectURL(e.target.files[0]))
          }} />

          <img src={showUserImage} />
          <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setserach(e.target.value)}
            />
            {console.log(search)}
            <button className="btn btn-outline-primary" type="button">
              Search
            </button>
          </form>

          <div className="row">
            {jsonData?.map((data, index) => (
              <div className="col-3 mt-5">
                <div className="card">
                  <img
                    src={data.thumbnail}
                    className="card-img-top w-100"
                    style={{ height: "150px" }}
                    alt="..."
                  />
                  <div className="card-body ">
                    <p className="card-title">
                      <span className="fw-semibold">Title : </span>
                      {data.title}
                    </p>
                    <p className="card-text">
                      <span className="fw-semibold">Brand : </span>
                      {data.brand}
                    </p>
                    {/* <p
                      className="card-text overflow-hidden"
                      style={{ height: "50px" }}
                    >
                      <span className="fw-semibold">Description : </span>
                      {data.description}
                    </p> */}
                    <p className="card-text">
                      <span className="fw-semibold">Price : </span>
                      {data.price}
                    </p>
                    <p className="card-text">
                      <span className="fw-semibold">Category : </span>
                      {data.category}
                    </p>
                    {/* <p className="card-text">
                      <span className="fw-semibold">Stock : </span>
                      {data.stock}
                    </p> */}
                    <div className="moreDetails d-flex justify-content-center">
                      <Link to={`/jsonSingleData/${data.id}`} className="btn btn-primary">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages - 10 > page && (
            <div className="loadMore d-flex justify-content-center my-5">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}

          {/* <div className="row">
            {product?.map((items,index) => (
              <div className="col-3 bg-warning" key={index}>
                <p>{items.title}</p>
                <p>{items.price}</p>
                <button onClick={() => handleAddMore(index)}>+</button>
              </div>
            ))}
          </div>
          <p>Total: </p>
          {getTotalAmpont()} */}

        </div>
      </Layout>
    </>
  );
};

export default ShowJsonUser;
