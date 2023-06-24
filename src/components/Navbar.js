import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5 fs-3">
          Contact List
        </Link>
        <div className=" my-1 me-3 text-end">
          <Link to="/add" className="btn btn-secondary">
            Add Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
