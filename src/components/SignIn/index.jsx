import React from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import {
  SignInContainer,
  ButtonsContainer,
} from './styles';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required />

          <ButtonsContainer>
            <CustomButton type="Submit">Sign in</CustomButton>
            <CustomButton type="Button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
          </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn;