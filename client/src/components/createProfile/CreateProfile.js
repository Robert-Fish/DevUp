import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '', // Done
      company: '', // Done
      website: '', // Done
      location: '', // Done
      status: '', // Done
      skills: '', // Done
      githubusername: '', // Done
      bio: '', // Done
      twitter: '', // Done
      facebook: '', // Done
      linkedin: '', // Done
      youtube: '', // Done
      instagram: '', // Done
      errors: {}
    };
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
    // let socialInput;
    const { errors } = this.state;

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
                className={classnames('form-control', {
                  'is-invalid': errors.handle
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
                className={classnames('form-control', {
                  'is-invalid': errors.company
                })}
              />
              <p className="errors">{errors.company}</p>
              <input
                placeholder="Location"
                name="location"
                type="text"
                value={this.state.location}
                onChange={this.onChange}
                className={classnames('form-control', {
                  'is-invalid': errors.location
                })}
              />
              <p className="errors">{errors.location}</p>
              <input
                placeholder="* Skills(Add your skills using commas)"
                name="skills"
                type="text"
                value={this.state.skills}
                onChange={this.onChange}
                className={classnames('form-control', {
                  'is-invalid': errors.skills
                })}
              />
              <p className="errors">{errors.skills}</p>
              <input
                placeholder="Website"
                name="website"
                type="text"
                value={this.state.website}
                onChange={this.onChange}
                className={classnames('form-control', {
                  'is-invalid': errors.website
                })}
              />
              <p className="errors">{errors.website}</p>
              <input
                placeholder="* Github Username"
                name="githubusername"
                type="text"
                value={this.state.githubusername}
                onChange={this.onChange}
                className={classnames('form-control', {
                  'is-invalid': errors.githubusername
                })}
              />
              <p className="errors">{errors.githubusername}</p>
              <textarea
                placeholder="Bio"
                name="bio"
                type="text"
                value={this.state.bio}
                onChange={this.onChange}
                className={classnames('form-control', {
                  'is-invalid': errors.bio
                })}
                rows="4"
              />
              <p className="errors">{errors.bio}</p>
              <select
                name="status"
                className={classnames('form-control', {
                  'is-invalid': errors.status
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

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
