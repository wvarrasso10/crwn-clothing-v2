import React, { useContext } from "react";
import "./checkout.styles";
import { CartContext } from "../../context/cart-context";
import CheckoutItemComponent from "../checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

function CheckoutComponent() {
  const { cartItems, total } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems &&
        cartItems.map((cartItem) => {
          return (
            <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
          );
        })}
      <Total>{`TOTAL: $${total}`}</Total>
    </CheckoutContainer>
  );
}

export default CheckoutComponent;
