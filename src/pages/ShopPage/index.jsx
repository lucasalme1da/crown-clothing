import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/container';
import CollectionPageContainer from '../CollectionPage/container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './styles';


const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => { fetchCollectionStart() }, [fetchCollectionStart]);

  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);