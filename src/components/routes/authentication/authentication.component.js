import React from "react";
import SignUpComponent from "../../sign-up/sign-up.component";
import SignInComponent from "../../sign-in/sign-in.component";
import "./authentication.styles.scss";

function AuthenticationComponent() {
  return (
    <div className="authentication-container">
      <SignInComponent/>
      <div>
        <SignUpComponent/>
      </div>
    </div>
  );
}

export default AuthenticationComponent;
