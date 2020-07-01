import React from 'react';
import './styles.scss'

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
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
      <CustomButton inverted onClick={() => addItem(item)}> ADD TO CART </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);