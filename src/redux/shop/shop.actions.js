import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
  isFetching: false,
});

// export const fetchCollectionStartAsync = collectionsMap => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionStart());

//     collectionRef.get()
//       .then(
//         snapshot => {
//           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//           dispatch(fetchCollectionSuccess(collectionsMap));
//           this.setState({ loading: false });
//         }
//       )
//       .catch(error => dispatch(fetchCollectionFailure(error)));
//   }
// };