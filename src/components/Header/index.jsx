import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './styles.scss'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logoContainer" to="/">
      <Logo className="logo" />

    </Link>
    <div className="options">
      {
        currentUser ?
          <h1>{`Welcome, ${currentUser.displayName}!`}<p>•</p></h1>
          :
          null
      }
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/sign-in">SIGN IN</Link>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);