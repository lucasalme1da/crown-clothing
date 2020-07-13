import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../CollectionPreview';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import {
  CollectionsOverviewContainer,
} from './styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </CollectionsOverviewContainer>
  )
};

const mapStateToPropts = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToPropts)(CollectionsOverview);