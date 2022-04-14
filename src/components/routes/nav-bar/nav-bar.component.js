import React, {Fragment} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import "./nav-bar.styles.scss";

function NavBarComponent() {
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
          <Link className="sign-in" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default NavBarComponent;
