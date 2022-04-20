import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import FormInputComponent from "../form-input/form-input.component";
import "./sign-up.styles";
import ButtonComponent, { BUTTON_TYPE } from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpComponent() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //confirm match
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    console.log(email, password);
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create email already in use.");
      } else {
        console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
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
          label="Display Name"
          onChange={handleChange}
          required
          value={displayName}
          name="displayName"
          type="text"
        />
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
        <FormInputComponent
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <ButtonComponent buttonType={BUTTON_TYPE.base} type="submit">
          Sign Up
        </ButtonComponent>
      </form>
    </div>
  );
}

export default SignUpComponent;
