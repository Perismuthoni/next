import React from "react";
//import {Navbar, Link } from "react-bootstrap";
import { Navbar, Nav, NavLink } from "reactstrap";
import "../static/root.css";
function Root() {
  return (
    <div className="Root">
      <Nav className="nav">
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/talent">Talent</NavLink>
        <NavLink href="/Blog">Blog</NavLink>
      </Nav>
    </div>
  );
}
export default Root;
