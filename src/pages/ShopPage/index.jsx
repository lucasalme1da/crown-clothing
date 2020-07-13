import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


import CollectionsOverviewContainer from '../../components/CollectionsOverview/container';
import CollectionPageContainer from '../CollectionPage/container';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './styles';


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
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
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);