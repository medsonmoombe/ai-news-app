import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    {/* <img className="navLogo" src="../../icons/spaceLogo.png" alt="" /> */}
    <h3 className="nav-title"><span className="n">News</span>Web</h3>
    <ul className="nav-links">
      <li><Link to="./">Home</Link></li>
      <li className="newslist"><Link to="/news">News</Link></li>
    </ul>
  </nav>
);

export default Navbar;





