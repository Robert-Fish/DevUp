import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import {
  NavBarContainer,
  NavLeft,
  Logo,
  SearchBar,
  NavRight,
  RegisterHint,
  ContributeLabel,
  RegisterLink,
  LoginLink,
  FeedLink,
  DashboardLink,
  LogoutLink
} from '../../styles/NavbarStyles';
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavLeft>
          <Logo>DevUp</Logo>
        </NavLeft>
        <NavRight>
          <FeedLink to="/profiles">Profiles</FeedLink>
          <FeedLink to="/feed">Feed</FeedLink>
          <DashboardLink to="/dashboard">Dashboard</DashboardLink>
          <LogoutLink to="#" onClick={() => this.props.logoutUser()}>
            Logout
          </LogoutLink>
        </NavRight>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLeft>
          <Logo>DevUp</Logo>
        </NavLeft>
        <NavRight>
          <RegisterLink to="/register">Register</RegisterLink>
          <LoginLink to="/login">Got an Account with us?</LoginLink>
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
