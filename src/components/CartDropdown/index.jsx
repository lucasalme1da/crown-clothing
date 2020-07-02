import React from 'react';
import './styles.scss';

import { connect } from 'react-redux';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cartDropdown">
    <div className="cartItems">
      {console.log(cartItems)}
      {cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
        <h4> Your cart is empty :C </h4>
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);