import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../CollectionPage';

import { ShopPageContainer } from './styles'

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;