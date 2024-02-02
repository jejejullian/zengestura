import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.classList.toggle("fa-times", menuActive);
  };

  const handleScroll = () => {
    setMenuActive(false);
    setHeaderActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setHeaderActive(window.scrollY > 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`header ${headerActive ? "active" : ""}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo">
            zengestura
          </a>
          <nav className={`nav ${menuActive ? "active" : ""}`}>
            <a href="#home" className="nav-link active">
              home
            </a>
            <a href="#studies" className="nav-link">
              collections
            </a>
          </nav>
          <FontAwesomeIcon id="menu-btn" icon={menuActive ? faTimes : faBars} size="xl" style={{ color: headerActive ? "black" : "#ffffff" }} onClick={handleMenuClick} />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
