import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlocks,
  Total,
  TestWarning
} from './styles';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      {[
        'Product',
        'Description',
        'Quantity',
        'Price',
        'Remove'
      ].map(item => <HeaderBlocks key={item}><span>{item}</span></HeaderBlocks>)}
    </CheckoutHeader>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <Total>
      <span>TOTAL: R${cartTotal}</span>
    </Total>

    <TestWarning>
      * PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS *
      <br />
      4242-4242-4242-4242 - Exp: any future date - Code: any 3 digit code
    </TestWarning>

    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);