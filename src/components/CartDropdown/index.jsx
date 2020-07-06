import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from './styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <EmptyMessage> Your cart is empty :C </EmptyMessage>
        }
      </CartItems>
      {
        cartItems.length ?
          <CustomButton onClick={() => {
            dispatch(toggleCartHidden())
            history.push('/checkout');
          }}>GO TO CHECKOUT</CustomButton> :
          null
      }
    </CartDropdownContainer>
  )
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropdown));