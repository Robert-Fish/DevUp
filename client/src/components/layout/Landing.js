import React, { Component } from "react";

import { Link } from "react-router-dom";

// Redux
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="Landing">
        <h1>Dev Up</h1>
        <h2>
          A place to connnect with others, down the road or the across the
          ocean.
        </h2>
        <i className="fas fa-laptop-code fa-6x" />
        <div className="userActions">
          <Link to="/register" className="userAction">
            Login
          </Link>
          <Link to="/login" className="userAction">
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
