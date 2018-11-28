import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "", // Done
      company: "", // Done
      website: "", // Done
      location: "", // Done
      status: "", // Done
      skills: "", // Done
      githubusername: "", // Done
      bio: "", // Done
      twitter: "", // Done
      facebook: "", // Done
      linkedin: "", // Done
      youtube: "", // Done
      instagram: "", // Done
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Skills back to csv
      const skillsCSV = profile.skills.join(",");

      // Check if skills is empty else empty string
      profile.company = !isEmpty(profile.company) ? profile.company : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social : {};
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social
        : {};
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social
        : {};
      profile.youtube = !isEmpty(profile.social.youtube) ? profile.social : {};
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social
        : {};

      // set component
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram
      });
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio
    };
    this.props.createProfile(profileData, this.props.history);
  };

  showSocialMedia = () => {
    this.setState({
      displaySocialInputs: !this.state.displaySocialInputs
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="row">
          <div className="col-md-12 m-auto">
            <h1 className="display-4 text-center">Edit Profile</h1>
            <p className="lead text-center">Let's get to know each other</p>
            <small className="d-block pb-3 text-center center-block">
              * = required
            </small>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="* @handle"
                name="handle"
                type="text"
                value={this.state.handle}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.handle
                })}
                info="Handle"
              />
              <p className="errors">{errors.handle}</p>
              <input
                placeholder="Company"
                name="company"
                type="text"
                value={this.state.company}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.company
                })}
              />
              <p className="errors">{errors.company}</p>
              <input
                placeholder="Location"
                name="location"
                type="text"
                value={this.state.location}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.location
                })}
              />
              <p className="errors">{errors.location}</p>
              <input
                placeholder="* Skills(Add your skills using commas)"
                name="skills"
                type="text"
                value={this.state.skills}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.skills
                })}
              />
              <p className="errors">{errors.skills}</p>
              <input
                placeholder="Website"
                name="website"
                type="text"
                value={this.state.website}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.website
                })}
              />
              <p className="errors">{errors.website}</p>
              <input
                placeholder="* Github Username"
                name="githubusername"
                type="text"
                value={this.state.githubusername}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.githubusername
                })}
              />
              <p className="errors">{errors.githubusername}</p>
              <textarea
                placeholder="Bio"
                name="bio"
                type="text"
                value={this.state.bio}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.bio
                })}
                rows="4"
              />
              <p className="errors">{errors.bio}</p>
              <select
                name="status"
                className={classnames("form-control", {
                  "is-invalid": errors.status
                })}
                onChange={this.onChange}
                value={this.state.status}
              >
                <option value="0">--Select Your Status--</option>
                <option value="web developer">Web Developer</option>
                <option value="tutor">Tutor</option>
                <option value="student">Student</option>
                <option value="mivo">Mivo</option>
                <option value="software engineer">Software Engineer</option>
                <option value="intern">Intern</option>
              </select>
              <p className="errors">{errors.status}</p>
              <button
                type="submit"
                className="btn btn-info btn-md center-block"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
