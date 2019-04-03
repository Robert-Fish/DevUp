import React, { Component } from 'react';
import {
  FormInput,
  FormMessage,
  FormTitle,
  SubmitFeature
} from '../../styles/RequestFormStyles';

export default class RequestFeature extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: ''
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container mt-4 bg-white center-block p-4">
        <FormTitle>Have a request for a new feature or bug?</FormTitle>
        <FormInput
          placeholder="Email"
          type="email"
          onChange={this.onChange}
          name="email"
        />
        <FormMessage
          placeholder="Feature or bug? Let me know!"
          onChange={this.onChange}
          name="message"
        />
        <SubmitFeature
          href={`mailto:elasys63@gmail.com?subject=${this.state.message} from ${
            this.state.email
          }`}
        >
          Submit
        </SubmitFeature>
        {/* <input type="text" /> */}
      </div>
    );
  }
}
