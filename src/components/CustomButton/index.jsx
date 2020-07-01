import React from 'react';
import './styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleSignIn' : ''} customButton`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;