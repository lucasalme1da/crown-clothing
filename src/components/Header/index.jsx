import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './styles.scss';


const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);