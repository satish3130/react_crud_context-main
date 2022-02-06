import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-2">
        <h1>CRUD using ReactJS</h1>
        <div className="d-flex justify-content-around">
          <NavLink to="/">
            <h4 className="me-4 nav-link">Home</h4>
          </NavLink>
          <NavLink to="/createuser">
            <h4 className="me-4 nav-link">Add New User</h4>
          </NavLink>
        </div>
      </div>
    </>
  );
}
