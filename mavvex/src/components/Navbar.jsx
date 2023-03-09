import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

import videoBG from "../Videos/Video8.mp4";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(isActive);

  return (
    <div>
      <div>
        <nav className={offset ? "active sticky" : "sticky"}>
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
              <Link to="/">Customers</Link>
            </li>

            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
          <div className="menu-icon" onWheel={toggleMenu}>
            <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
