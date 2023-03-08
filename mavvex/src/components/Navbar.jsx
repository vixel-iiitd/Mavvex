import "./Navbar.css";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={isActive ? 'active' : ''}>
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

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isActive ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

    </nav>
  );
};

export default Navbar;
