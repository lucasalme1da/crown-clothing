import React from 'react';
import './styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collectionItem">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collectionFooter">
      <span className="name">{name}</span>
      <span className="price">R${price}</span>
    </div>
  </div>
);

export default CollectionItem;