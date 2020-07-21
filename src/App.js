import React, { useEffect } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartItems } from './redux/cart/cart.selectors';

import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser, cartItems }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
        <Route exact path="/checkout" render={() => cartItems.length ? <CheckoutPage /> : <Redirect to='/' />} />
      </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
