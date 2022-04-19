import React, {useContext} from "react";
import "./checkout.styles.scss";
import {CartContext} from "../../context/cart-context";
import CheckoutItemComponent from "../checkout-item/checkout-item.component";

function CheckoutComponent(props) {
  const {cartItems} = useContext(CartContext);
  const headerItems = ["Product", "Description", "Quantity", "Price", "Remove"];
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems &&
        cartItems.map((cartItem) => {
          return (
            <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
          );
        })}
    </div>
  );
}

export default CheckoutComponent;
