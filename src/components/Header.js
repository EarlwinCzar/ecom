import React from "react";
import navbrand from "../assets/navbrand.png";
import nav1 from "../assets/nav1.png";
import nav2 from "../assets/nav2.png";
import "../styles/components/header.css";

function Header() {
  return (
    <header className="nav-header">
      <nav className="nav-header-nav">
        <div>
          <img className="nav-brand" src={navbrand} alt="Brand" />
        </div>
        <ul>
          <li>DUFTE</li>
          <li>UBER UNS</li>
          <li>BLOG</li>
        </ul>
        <div className="nav-icons">
          <img className="nav-cart" src={nav1} alt="cart" />
          <img className="nav-user" src={nav2} alt="user" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
