import React from "react";
import "./button.styles";
import {BaseButton, InvertedButton} from "./button.styles";

export const BUTTON_TYPE = {
  base: "base",
  google: "google-authentication",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE.base) => {
  return {
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType];
};

function ButtonComponent({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
}

export default ButtonComponent;
