import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Landing extends Component {
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
