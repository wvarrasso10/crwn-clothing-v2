import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import {
  CartItemContainer,
  ItemCount,
  ShoppingIconImg,
} from "./cart-icon.styles";
import {setIsCartOpen} from "../../store/cart/cart.action";
import { selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";
import {useDispatch, useSelector} from "react-redux";

function CartIconComponent() {
  /*const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);*/
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIconImg />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
}

export default CartIconComponent;
