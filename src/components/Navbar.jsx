/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  const {user, handleLogout} = useContext(SiteContext)
  return (
    <>
      <nav className="navbar bg-warning-subtle navbar-expand-lg mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bolder text-danger" >X-StOrE</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <ThemeIcon/>
              {
                user ? (<>
                
                <NavLink className="nav-link" to="/fav">
                Favorites
              </NavLink>
              <button className="nav-link" onClick={handleLogout}>
                Logout ({user.name})
                </button>
              </>):
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
