import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../components/Context";

export default function Home() {
  const context = useContext(Context);

  let deleteId;
  const de = (id) => {
    deleteId = id;
  };
  // Delete
  const deleteUser = async () => {
    await axios.delete(
      `https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock/${deleteId}`
    );
    // console.log(deleteUserId);
    const data = context.data.filter((x) => x.id !== deleteId);
    console.log(data);
    context.setData(data);
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h3>Users Data</h3>
      <div className="d-flex mt-3 flex-wrap justify-content-center align-items-center">
        {context.data.map((data) => {
          return (
            <div
              key={data.id}
              className="d-flex me-5 mb-5 flex-column border br rounded border-secondary"
            >
              <div className="p-3 d-flex flex-column justify-content-center">
                <div className="d-flex flex-column">
                  <img
                    className="rounded mx-auto d-block"
                    src={data.avatar}
                    alt=""
                  />
                  <h3 className="d-flex justify-content-center mt-3">
                    {data.name}
                  </h3>
                  <div className="d-flex justify-content-center">
                    <Link
                      to={`edituserdetails/${data.id}`}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-user-edit"></i>
                    </Link>
                  </div>
                </div>
                <div className="mt-3">
                  <b>Email : </b>
                  {data.email}
                </div>
                <div className="mt-2">
                  <b>Country : </b>
                  {data.country}
                </div>
                <Link to={`edituser/${data.id}`}>
                  <button type="button" className="btn btn-primary w-100 mt-3">
                    Edit User
                  </button>
                </Link>
                <Link to={`profile/${data.id}`}>
                  <button type="button" className="btn btn-success w-100 mt-2">
                    Profile
                  </button>
                </Link>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#myModal"
                  className="btn btn-danger mt-2"
                  onClick={() => de(data.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* modal header */}
              <div className="modal-header">
                <h4 className="modal-title">Delete for Sure?</h4>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  data-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              {/* <div className="modal-body">Modal body..</div> */}

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteUser}
                  data-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
