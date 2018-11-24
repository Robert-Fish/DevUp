import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
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
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="Register">
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
export default Register;
