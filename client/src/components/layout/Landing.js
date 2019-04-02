import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// Redux
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="container landing">
        <h1 className="display-4">Dev Up</h1>
        <p className="lead text-center ">
          A place to connnect with others, down the road or the across the
          ocean.
        </p>
        <div>
          <Link to="/login" className="btn btn-light btn-lg btn-block">
            Login
          </Link>
          <Link to="/register" className="btn btn-light btn-lg btn-block">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
