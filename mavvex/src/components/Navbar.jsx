import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className="h-9" alt="logo" />
      <ul className="nav-links">
        <li className="dropdown">
          <Link to="/" className="dropdown-toggle">
            Industries
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link to="/">Healthcare</Link>
            </li>
            <li>
              <Link to="/">Retail</Link>
            </li>
            <li>
              <Link to="/">Agriculture</Link>
            </li>
            <li>
              <Link to="/">Conversational AI</Link>
            </li>
            <li>
              <Link to="/">Security and Privacy in AI</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Customers</Link>
        </li>

        <li className="dropdown">
          <Link to="/" className="dropdown-toggle">
            Research
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/">Publications</Link>
            </li>
            <li>
              <Link to="/">Research Team</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/" className="dropdown-toggle">
            Company
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>

            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
