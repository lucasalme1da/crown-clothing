import React from 'react';
import './styles.scss';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../CollectionPage';

const ShopPage = ({ match }) => (
  <div className="shopPage">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;