import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
//

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  // helper function to bind input value to state
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // on submit calls auth action register user and passes object
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  // checks if errors props is updated, if so. If so, sets state of errors to props
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container register">
        <h1>Register</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            className={classnames("form-control", {
              "is-invalid": errors.name
            })}
          />
          <p className="errors">{errors.name}</p>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            className={classnames("form-control", {
              "is-invalid": errors.email
            })}
          />
          <p className="errors">{errors.email}</p>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            className={classnames("form-control", {
              "is-invalid": errors.password
            })}
          />
          <p className="errors">{errors.password}</p>
          <input
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            className={classnames("form-control", {
              "is-invalid": errors.password2
            })}
          />
          <p className="errors">{errors.password2}</p>
          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
