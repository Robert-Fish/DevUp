// @flow
import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import {
  NavBarContainer,
  NavLeft,
  Logo,
  NavRight,
  NavBarLink,
  ProfilePicture
} from "../../styles/NavbarStyles";

type Props = {
  logoutUser: Function,
  clearCurrentProfile: Function,
  auth: Object,
  history: Object,
  profile: Object
};

class Navbar extends React.Component<Props> {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <React.Fragment>
        <NavLeft>
          <Logo onClick={() => this.props.history.push("/")}>
            <span style={{ color: "rgb(216,23,59)", fontWeight: "bold" }}>
              Dev
            </span>
            Up
          </Logo>
        </NavLeft>
        <NavRight>
          <NavBarLink to="/profiles">Profiles</NavBarLink>
          {/* <NavBarLink to={profile === undefined ? '' : `/profile/${profile.handle}`}>My Profile</NavBarLink>x  */}
          <NavBarLink to="/feed">Feed</NavBarLink>
          <NavBarLink to="/dashboard">Dashboard</NavBarLink>
          <ProfilePicture src={user.avatar} alt="profile picture" />
          <NavBarLink to="#" onClick={() => this.props.logoutUser()}>
            Logout
          </NavBarLink>
        </NavRight>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <NavLeft>
          <Logo>
            <span style={{ color: "rgb(216,23,59)", fontWeight: "bold" }}>
              Dev
            </span>
            Up
          </Logo>
        </NavLeft>
        <NavRight>
          <NavBarLink to="/register">Register</NavBarLink>
          <NavBarLink to="/login">Got an Account with us?</NavBarLink>
        </NavRight>
      </React.Fragment>
    );

    return (
      <NavBarContainer>
        {isAuthenticated !== true ? guestLinks : authLinks}
      </NavBarContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(withRouter(Navbar));
