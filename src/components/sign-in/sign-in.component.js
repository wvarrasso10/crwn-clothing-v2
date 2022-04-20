import React, { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import "./sign-in.styles";
import ButtonComponent, { BUTTON_TYPE } from "../button/button.component";
import GoogleSignInButton from "../../assets/btn_google_signin_light_normal_web.png";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";
import { useNavigate } from "react-router";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInComponent() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
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
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <img
            src={GoogleSignInButton}
            alt="google-sign-in"
            onClick={logGoogleUser}
          />
          <ButtonComponent buttonType={BUTTON_TYPE.base} type="submit">
            Sign In
          </ButtonComponent>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInComponent;
