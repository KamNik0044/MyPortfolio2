import "./NavbarStyle.css";

import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nabar = () => {

 const [click, setClick] = useState(false);
 // eslint-disable-next-line no-unused-vars
 const handleClick = () => setClick(!click);

// eslint-disable-next-line no-unused-vars
const [color, seColor] = useState(false);
// eslint-disable-next-line no-unused-vars
const changeColor = () =>{
 if (window.scrollY >= 100) {
   seColor(true);
 }
else{
  seColor(false);
}
};

window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>KAM NIK</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  )
}

export default Nabar
