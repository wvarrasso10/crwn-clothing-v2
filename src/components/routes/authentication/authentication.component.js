import React from "react";
import SignUpComponent from "../../sign-up/sign-up.component";
import SignInComponent from "../../sign-in/sign-in.component";
import "./authentication.styles";
import {AuthenticationContainer} from "./authentication.styles";

function AuthenticationComponent() {
  return (
    <AuthenticationContainer>
      <SignInComponent/>
      <div>
        <SignUpComponent/>
      </div>
    </AuthenticationContainer>
  );
}

export default AuthenticationComponent;
