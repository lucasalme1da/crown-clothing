import React from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { SignInAndSignUp } from './styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUp>
    <SignIn />
    <SignUp />
  </SignInAndSignUp>
);

export default SignInAndSignUpPage;