import React from "react";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

import '../../styles/Nav.css'

const NavbarWeb = () => {
  const navigate = useNavigate();

  return (
    <div className={`navbarForWeb`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul>
          <li><Link to="/">SERVICES</Link></li>
          <li><Link to="/">DOCTORS</Link></li>
          <li><Link to="/">PRICING</Link></li>
          <li><Link to="/">ABOUT US</Link></li>
          <li><Link to="/">CONTACT</Link></li>
        </ul>
      </nav>

      <div className="nav_btn">
        <button onClick={() => navigate("/auth")}>
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default NavbarWeb;

