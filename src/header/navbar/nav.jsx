import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="nav-menu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/jobSeekers">
            <li>Job Seekers</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
