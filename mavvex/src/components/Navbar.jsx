import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

import { Link as ScrollLink } from "react-scroll";

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

  return (
    <div>
      <div>
        <nav className={offset ? "active sticky" : "sticky"}>
          <img src={Logo} className="h-9" alt="logo" />
          <ul className="nav-links">
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle">
                Use Case
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <ScrollLink to="UseCase1" >Deep Tech Product Development</ScrollLink>
                </li>
                <li>
                  <Link to="/">
                    Enabling Data Privacy in Machine Learning Model
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Better Language Transcription and Translation Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <ScrollLink
                Link
                to="Industries"
                spy={true}
                smooth={true}
                className="dropdown-toggle"
              >
                Industries
              </ScrollLink>

              <ul className="dropdown-menu">
                <li>
                  <Link to="/Healthcare">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/Retail">
                    Retail
                  </Link>
                </li>
                <li>
                  <Link to="/Agriculture">
                      Agriculture
                  </Link>
                </li>
                <li>
                  <Link to="/ConversationalAI">
                  Conversational AI
                  </Link>
                </li>
                <li>
                  <Link to="/SecurityPrivacyAI">
                  Security and Privacy in AI
                  </Link>
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
