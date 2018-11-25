import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
// Redux imports
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
////

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile
      if (Object.keys(profile).length > 0) {
        // Has profile
        dashboardContent = (
          <div className="row">
            <div className="col-md-6">
              <img
                src={user.avatar}
                style={{
                  borderRadius: "50%",
                  width: "25%"
                }}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h2>Hi, {user.name}</h2>
              <h3>@{profile.handle}</h3>
              <div className="row">
                <div className="col-md-6">
                  <h3>Having fun at {profile.company}</h3>
                  <h4>An {profile.status}?</h4>
                </div>
                <div className="col-md-6" />
              </div>
            </div>
          </div>
        );
      } else {
        // Doesn't have profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not setup a profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
