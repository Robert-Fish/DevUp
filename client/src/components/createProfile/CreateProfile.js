import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

class CreateProfile extends Component {
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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
    console.log("Profile created");
  };

  showSocialMedia = () => {
    this.setState({
      displaySocialInputs: !this.state.displaySocialInputs
    });
  };

  render() {
    let socialInput;
    const { errors } = this.state;

    if (this.state.displaySocialInputs === true) {
      socialInput = (
        <Fragment>
          <div className="social-input">
            <div className="item">
              <i className="fab fa-facebook-square fa-2x" />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Facebook"
                className={classnames("form-control", {
                  "is-invalid": errors.facebook
                })}
                onChange={this.onChange}
                value={this.state.facebook}
              />
            </div>
          </div>
          <div className="social-input">
            <div className="item">
              <i className="fab fa-twitter-square fa-2x" />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Twitter"
                className={classnames("form-control", {
                  "is-invalid": errors.twitter
                })}
                onChange={this.onChange}
                value={this.state.twitter}
              />
            </div>
          </div>
          <div className="social-input">
            <div className="item">
              <i className="fab fa-linkedin fa-2x" />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="LinkedIn"
                className={classnames("form-control", {
                  "is-invalid": errors.linkedin
                })}
                onChange={this.onChange}
                value={this.state.linkedin}
              />
            </div>
          </div>
          <div className="social-input">
            <div className="item">
              <i className="fab fa-youtube-square fa-2x" />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Youtube"
                className={classnames("form-control", {
                  "is-invalid": errors.youtube
                })}
                onChange={this.onChange}
                value={this.state.youtube}
              />
            </div>
          </div>
          <div className="social-input">
            <div className="item">
              <i className="fab fa-instagram fa-2x" />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Instagram"
                className={classnames("form-control", {
                  "is-invalid": errors.instagram
                })}
                onChange={this.onChange}
                value={this.state.instagram}
              />
            </div>
          </div>
        </Fragment>
      );
    } else {
      socialInput = null;
    }
    return (
      <div className="create-profile">
        <div className="row">
          <div className="col-md-12 m-auto">
            <h1 className="display-4 text-center">Create Your Profile</h1>
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
              <input
                placeholder="* Company"
                name="company"
                type="text"
                value={this.state.company}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.company
                })}
              />
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
              <input
                placeholder="* Website"
                name="website"
                type="text"
                value={this.state.website}
                onChange={this.onChange}
                className={classnames("form-control", {
                  "is-invalid": errors.website
                })}
              />
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
              <select
                name="status"
                className="form-control"
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
              <button
                type="submit"
                className="btn btn-info btn-md center-block"
              >
                Create Profile
              </button>
            </form>
            {/* <button
              onClick={this.showSocialMedia}
              className="btn-md btn-primary center-block"
            >
              Add Social Media
            </button>
            {socialInput} */}
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
