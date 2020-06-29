import React from 'react';
import './styles.scss'

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword)
      return alert("Passwords doesn't match!");

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;