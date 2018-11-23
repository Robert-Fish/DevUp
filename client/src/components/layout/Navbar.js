import React, { Component } from "react";
import { Navbar, NavDropdown, NavItem, MenuItem, Nav } from "react-bootstrap";
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
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <Link to="/register" className="navItem">
              Register
            </Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/login" className="navItem">
              Login
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
