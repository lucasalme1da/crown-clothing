import React from 'react';
import './styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt="Item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">R${price}</span>
    <div className="removeButton">&#10005;</div>
  </div>
);

export default CheckoutItem;