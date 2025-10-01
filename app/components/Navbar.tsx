import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-200">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUME REVIEWER</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
