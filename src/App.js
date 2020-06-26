import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
