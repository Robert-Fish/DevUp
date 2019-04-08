import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { LoginContainer } from '../../styles/LoginStyles';

// redux
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <LoginContainer>
        <div className="container login">
          <h1>Login</h1>
          <form
            noValidate
            onSubmit={this.onSubmit}
            className="justify-content-center"
          >
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              className={classnames('form-control', {
                'is-invalid': errors.email
              })}
            />
            <p className="errors">{errors.email}</p>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              className={classnames('form-control', {
                'is-invalid': errors.password
              })}
            />
            <p className="errors">{errors.password}</p>
            <input type="submit" className="btn btn-info mt-4" />
          </form>
        </div>
        <img
          src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?cs=srgb&dl=architectural-design-architecture-birds-eye-view-1722183.jpg&fm=jpg"
          alt=""
          style={{
            width: '50%'
          }}
        />
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
