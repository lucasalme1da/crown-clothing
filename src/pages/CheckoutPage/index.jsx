import React from 'react';
import './styles.scss';

import CheckoutItem from '../../components/CheckoutItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkoutPage">
    <div className="checkoutHeader">
      <div className="headerBlocks">
        <span>Product</span>
      </div>
      <div className="headerBlocks">
        <span>Description</span>
      </div>
      <div className="headerBlocks">
        <span>Quantity</span>
      </div>
      <div className="headerBlocks">
        <span>Price</span>
      </div>
      <div className="headerBlocks">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: R${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);