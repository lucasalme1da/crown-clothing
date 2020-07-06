import React from 'react';

import {
  CartItemContainer,
  ItemDetails,
  Label,
} from './styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="Item" />
    <ItemDetails>
      <Label>{name}</Label>
      <Label>{quantity} x R${price}</Label>
    </ItemDetails>
  </CartItemContainer>
);


export default CartItem;