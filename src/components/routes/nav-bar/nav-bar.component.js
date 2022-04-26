import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./nav-bar.styles";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase.utils";
import CartIconComponent from "../../cart-icon/cart-icon.component";
import CartDropdownComponent from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../context/cart-context";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./nav-bar.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen} from "../../../store/cart/cart.selector";

function NavBarComponent() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer className="logo-container" to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIconComponent />
        </NavLinks>
        {isCartOpen && <CartDropdownComponent />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default NavBarComponent;
