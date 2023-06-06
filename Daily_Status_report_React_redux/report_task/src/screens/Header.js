import React from "react";
import { Link } from "react-router-dom";
import e from "../e.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand text-white">
          <img
            src={e}
            alt="Logo"
            width="78"
            height="38"
            className="d-inline-block align-text-top"
          />
          3G
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <div className="navbar-nav ml-auto">
              <Link to="/about" className="nav-link text-success">
                About
              </Link>

              <Link to="/contact" className="nav-link text-danger">
                Contact
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
