import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <Navbar className="navBar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="navBarTitle">
              Dev/Up
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight activeKey="">
          <li className="nav-item">
            <Link to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
