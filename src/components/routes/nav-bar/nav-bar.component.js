import React, {Fragment, useContext} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import "./nav-bar.styles.scss";
import {UserContext} from "../../../context/user.context";
import {signOutUser} from "../../../utils/firebase.utils";
import CartIconComponent from "../../cart-icon/cart-icon.component";
import CartDropdownComponent from "../../cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../../context/cart-context";

function NavBarComponent() {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIconComponent/>
        </div>
        {isCartOpen && <CartDropdownComponent/>}
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default NavBarComponent;
