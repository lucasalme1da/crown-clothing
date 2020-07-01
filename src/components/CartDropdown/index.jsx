import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton';

const CartDropdown = () => (
  <div className="cartDropdown">
    <div className="cartItems" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;