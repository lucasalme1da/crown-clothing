import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './styles'

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      {
        currentUser ?
          <h1>{`Welcome, ${currentUser.displayName}!`}<p>•</p></h1>
          :
          null
      }
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ?
        <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink to="/sign-in">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);