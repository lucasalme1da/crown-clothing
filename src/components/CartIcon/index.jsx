import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    {itemCount > 0 && <span className="itemCount">{itemCount}</span>}
  </div>
);

const mapStateToPropts = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToPropts, mapDispatchToProps)(CartIcon);