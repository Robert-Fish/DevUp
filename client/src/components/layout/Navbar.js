import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import {
  NavBarContainer,
  NavLeft,
  Logo,
  NavRight,
  NavBarLink
} from '../../styles/NavbarStyles';
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavLeft>
          <Logo>
            <span style={{ color: 'rgb(216,23,59)', fontWeight: 'bold' }}>
              Dev
            </span>
            Up
          </Logo>
        </NavLeft>
        <NavRight>
          <NavBarLink to="/profiles">Profiles</NavBarLink>
          <NavBarLink to="/feed">Feed</NavBarLink>
          <NavBarLink to="/dashboard">Dashboard</NavBarLink>
          <NavBarLink to="#" onClick={() => this.props.logoutUser()}>
            Logout
          </NavBarLink>
        </NavRight>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLeft>
          <Logo>
            <span style={{ color: 'rgb(216,23,59)', fontWeight: 'bold' }}>
              Dev
            </span>
            Up
          </Logo>
        </NavLeft>
        <NavRight>
          <NavBarLink to="/register">Register</NavBarLink>
          <NavBarLink to="/login">Got an Account with us?</NavBarLink>
        </NavRight>
      </Fragment>
    );

    return (
      <NavBarContainer>
        {isAuthenticated !== true ? guestLinks : authLinks}
      </NavBarContainer>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
