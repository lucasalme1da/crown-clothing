import React from 'react';
import './styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
  <button className="customButton" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;