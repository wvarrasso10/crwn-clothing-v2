import React from "react";
import "./button.styles.scss";

const BUTTON_TYPE = {
  google: "google-authentication",
  inverted: "inverted",
};

function ButtonComponent({children, buttonType, ...otherProps}) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
