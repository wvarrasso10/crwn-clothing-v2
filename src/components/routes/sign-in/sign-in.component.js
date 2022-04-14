import React from "react";
import {signInWithGooglePopup,} from "../../../utils/firebase.utils";
import GoogleSignInButton from "../../../assets/btn_google_signin_light_normal_web.png";

function SignInComponent() {
  const logGoogleUser = async () => {
    console.log("here");
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <img
        src={GoogleSignInButton}
        alt="google-sign-in"
        onClick={logGoogleUser}
      />
    </div>
  );
}

export default SignInComponent;
