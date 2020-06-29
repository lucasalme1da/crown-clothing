import React from 'react';
import './styles.scss';

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const SignInAndSignUpPage = () => (
  <div className="signInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;