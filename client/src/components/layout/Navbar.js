import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class NavBar extends Component {
  onlogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <Fragment>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );

    const authLinks = (
      <Fragment>
        <li className="nav-item">
          <a href="/logout" onClick={this.onlogout.bind(this)}>
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              style={{
                width: "25px",
                marginRight: "5px",
                borderRadius: "50%"
              }}
              title="You must have a gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </Fragment>
    );
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
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
