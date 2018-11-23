import React, { Component } from "react";
import { Navbar, NavDropdown, NavItem, MenuItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <Navbar className="navBar">
        <Navbar.Header>
          <Navbar.Brand>
            <i className="fas fa-desktop navbarIcon" />
            <a href="#home" id="navBarTitle">
              DevUp - Start Connecting
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#" className="navItem">
            <Link to="/register">Register</Link>
          </NavItem>
          <NavItem eventKey={2} href="#" className="navItem">
            Login
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
