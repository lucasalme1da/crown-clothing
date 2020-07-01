import React from 'react';
import './styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="Item" />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">{quantity} x R${price}</span>
    </div>
  </div>
);


export default CartItem;