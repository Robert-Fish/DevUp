import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { DefaultProfilePic, ProfilePicTitle } from '../../styles/UserPicStyles';
class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    const colorWheel = ['#318BA3', '#14ABBD', '#FFAA00', '#FF6000', '#FF3800'];
    const randomIndex = Math.floor(Math.random() * colorWheel.length);

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {profile.user.avatar.includes('www.gravatar.com/avatar/') ? (
                  <DefaultProfilePic bgcolor={colorWheel[randomIndex]}>
                    <ProfilePicTitle>
                      {profile.user.name.slice(0, 1)}
                    </ProfilePicTitle>
                  </DefaultProfilePic>
                ) : (
                  <img
                    className="rounded-circle"
                    src={profile.user.avatar}
                    alt=""
                    style={{
                      marginLeft: '1rem'
                    }}
                  />
                )}
              </div>
            </div>
            <div className="text-center">
              <h1
                className="display-4 text-center text-dark"
                style={{ textTransform: 'capitalize' }}
              >
                {profile.user.name}
              </h1>
              <p className="lead text-center text-dark">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : (
                <p className="text-dark">{profile.location}</p>
              )}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-dark p-2"
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
