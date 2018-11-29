import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class NavBar extends Component {
  // If logout is clicked, call this function
  onlogout(e) {
    // console.log(this.props.history);
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    // Destructuring
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <div className="nav">
        <li className="nav-item">
          <Link to="/profiles">Profiles</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </div>
    );

    const authLinks = (
      <div className="nav">
        <li className="nav-item">
          <Link to="/profiles">Profiles</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <a
            href="/
          "
            onClick={this.onlogout.bind(this)}
          >
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
      </div>
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
        <Nav pullRight>{isAuthenticated ? authLinks : guestLinks}</Nav>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(NavBar);
