import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  Title,
  Items
} from './styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </Items>
    </CollectionPageContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);