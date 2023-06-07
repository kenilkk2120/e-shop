import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { userdata } from "../store/listUser";
import { Link } from "react-router-dom";

const ShowUserData = () => {
  const dispatch = useDispatch();

  const { totalPages, userData } = useSelector((state) => ({
    userData: state?.listUser?.data,
    totalPages: state?.listUser?.totalPages,
  }));

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  /**
   * https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
   */

  console.log("UserData...", userData);

  const handleLoadMore = (event) => {
    event.preventDefault();
    setPage((prevPage) => prevPage + 1);
  };

  /**
   * pagination,search and data get
   */
  useEffect(() => {
    dispatch(userdata({ page, search }));
  }, [page, search]);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="titleName">
            <h2 className="mt-5 text-primary">User Data</h2>
          </div>

          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          <div className="showData mt-4">
            <div className="row">
              {userData?.map((items, index) => (
                <div className="col-4 my-3" key={index}>
                  <div className="card">
                    <img
                      src={items.avatar}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text fw-semibold">
                        First Name : {items.first_name}
                      </p>
                      <p className="card-text fw-semibold">
                        Last Name : {items.last_name}
                      </p>
                      <p className="card-text fw-semibold">
                        Email : {items.email}{" "}
                      </p>
                    </div>
                    <div className="moreDetails d-flex justify-content-center">
                      <Link to={`/userDetails/${items.id}`} className="btn btn-primary my-3">
                          More Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > page && (
              <div className="w-100 d-flex justify-content-center my-5">
                <button
                  className="btn btn-primary mx-auto"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ShowUserData;
