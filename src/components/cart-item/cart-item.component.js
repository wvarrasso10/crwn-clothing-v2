import React from "react";
import "./cart-item.styles";
import {CartItemContainer, Img, ItemDetails, Name} from "./cart-item.styles";

function CartItemComponent({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <Img alt={name} src={imageUrl} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItemComponent;
