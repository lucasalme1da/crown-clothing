import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './styles.scss';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collectionsOverview">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
};

const mapStateToPropts = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToPropts)(CollectionsOverview);