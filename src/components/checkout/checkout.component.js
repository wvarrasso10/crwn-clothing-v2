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
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";
import {useSelector} from "react-redux";

function CheckoutComponent() {
  // const { cartItems, total } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal)
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
