import React from 'react';
import './styles.scss'

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required />

          <div className="buttons">
            <CustomButton type="Submit">Sign in</CustomButton>
            <CustomButton onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }} isGoogleSignIn>
              Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;