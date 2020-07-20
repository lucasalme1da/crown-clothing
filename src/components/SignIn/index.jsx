import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

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

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({
    //     email: '',
    //     password: '',
    //   })
    // } catch (error) {
    //   console.log(error);
    // }

  }

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton
              type="Button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
          </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))

})

export default connect(null, mapDispatchToProps)(SignIn);