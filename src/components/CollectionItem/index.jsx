import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton'

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
} from './styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <CustomButton inverted onClick={() => addItem(item)}> ADD TO CART </CustomButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);