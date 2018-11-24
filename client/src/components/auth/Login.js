import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/users/login", user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="Login">
        <h1>Login</h1>
        <form noValidate onSubmit={this.onSubmit}>
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
          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </div>
    );
  }
}
export default Login;
