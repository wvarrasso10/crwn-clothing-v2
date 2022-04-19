import React, {useState} from "react";
import {signInUserWithEmailAndPassword, signInWithGooglePopup,} from "../../utils/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import ButtonComponent from "../button/button.component";
import GoogleSignInButton from "../../assets/btn_google_signin_light_normal_web.png";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInComponent() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error.code);
      const errorCode = {
        "auth/wrong-password": alert("Incorrect Password."),
        "auth/user-not-found": alert("User Not Found."),
      };
      return errorCode[error.code];
    }
  };

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={(event) => {
          return handleSubmit(event);
        }}
      >
        <FormInputComponent
          label="Email"
          onChange={handleChange}
          required
          value={email}
          name="email"
          type="email"
        />
        <FormInputComponent
          label="Password"
          onChange={handleChange}
          required
          name="password"
          value={password}
          type="password"
        />
        <div className="buttons-container">
          <img
            src={GoogleSignInButton}
            alt="google-sign-in"
            onClick={logGoogleUser}
          />
          <ButtonComponent type="submit">Sign In</ButtonComponent>
        </div>
      </form>
    </div>
  );
}

export default SignInComponent;
