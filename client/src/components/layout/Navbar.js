import React, { Component } from "react";
import { Navbar, NavDropdown, NavItem, MenuItem, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">DevUp - Start Connecting</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Register
          </NavItem>
          <NavItem eventKey={2} href="#">
            Login
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
