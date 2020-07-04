import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => {

  return (

    <div className="cartDropdown">
      <div className="cartItems">
        {cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          :
          <span className="emptyMessage"> Your cart is empty :C </span>
        }
      </div>

      {
        cartItems.length ?
          <CustomButton onClick={() => {
            dispatch(toggleCartHidden())
            history.push('/checkout');
          }}>GO TO CHECKOUT</CustomButton> :
          null
      }

    </div>
  )
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropdown));