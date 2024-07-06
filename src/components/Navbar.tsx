"use client"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY >= 85);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  return (
    <header className={`header ${headerScrolled ? "on-scroll" : ""}`} id="header" style={{ backgroundImage: "url(/bg.png)" }}>
      <nav className="navbar container">
        <a href="/" className="text-3xl  font-extrabold leading-3">
            <span className="text-[#C88F03] leading-6 ">Sur</span><span className="text-black leading-6">Rag</span>
        </a>
        <div
          className={`burger ${menuActive ? "is-active" : ""}`}
          id="burger"
          onClick={handleBurgerClick}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={`menu ${menuActive ? "is-active" : ""}`} id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <a href="#" className="text-xl font-bold  text-[#7B5C0F]" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="menu-item">
              <a href="#" className="text-xl font-bold  text-[#7B5C0F]" onClick={handleLinkClick}>About</a>
            </li>
            <li className="menu-item">
              <a href="#" className="text-xl font-bold  text-[#7B5C0F]" onClick={handleLinkClick}>Contact</a>
            </li>
            <li className="menu-item">
              <a href="#" className="text-xl font-bold  text-[#7B5C0F] " onClick={handleLinkClick}>Visit</a>
            </li>
          </ul>
        </div>
        <a href="#" className="menu-block bg-[#C88F03] shadow-lg">Book a demo!</a>
      </nav>
    </header>
  );
};

export default Navbar;
