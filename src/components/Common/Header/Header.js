import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="user" className="nav-link">
                  User's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="prodcuts" className="nav-link">
                  Prodcuts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/post" className="nav-link">
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="login" className="nav-link">
                  Login
                </NavLink>
              </li>

             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
