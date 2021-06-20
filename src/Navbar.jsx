import React from "react";
import logo from "../src/assets/logo.png";
import Link from "./Link";
import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  return (
    <>
      <div>
        <nav className="navbar" id="myTopnav">
          <Link className="navbar-link flex-one" href="/">
            <img src={logo} alt="logo" height="75" width="75" />
          </Link>
          <Link
            className="navbar-link anchor active"
            href="/"
            children="Home"
          />
          <Link
            className="navbar-link anchor"
            href="/service"
            children="Services"
          />
          <Link className="navbar-link anchor" href="/about" children="About" />
          <Link
            className="navbar-link anchor"
            href="/contact"
            children="Contact"
          />
          <a href="/home" class="icon" onClick={myFunction}>
            <FaBars />
          </a>
          {/* <a
            className="navbar-link flex-one"
            href="/"
            onClick={onClick("/")}
          ></a>
          <a className="navbar-link anchor" href="/" onClick={onClick}>
            Home
          </a>
          <a className="navbar-link anchor" href="/service" onClick={onClick}>
            Services
          </a>
          <a className="navbar-link anchor" href="/about" onClick={onClick}>
            About
          </a>
          <a className="navbar-link anchor" href="/contact" onClick={onClick}>
            Contact
          </a> */}
          {/* <NavLink className="navbar-link flex-one" to="#">
            <img src={logo} alt="logo" height="75" width="75" />
          </NavLink>
          <NavLink className="navbar-link anchor" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-link anchor" to="/service">
            Services
          </NavLink>
          <NavLink className="navbar-link anchor" to="/about">
            About
          </NavLink>
          <NavLink className="navbar-link anchor" to="/contact">
            Contact
          </NavLink> */}
        </nav>
      </div>
    </>
  );
}
