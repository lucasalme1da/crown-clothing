import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
  </CartIconContainer>
);

const mapStateToPropts = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToPropts, mapDispatchToProps)(CartIcon);