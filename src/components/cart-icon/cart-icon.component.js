import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import {
  CartItemContainer,
  ItemCount,
  ShoppingIconImg,
} from "./cart-icon.styles";

function CartIconComponent() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIconImg />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
}

export default CartIconComponent;
