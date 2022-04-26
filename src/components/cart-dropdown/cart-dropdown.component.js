import React, { useContext } from "react";
import "./cart-dropdown.styles";
import ButtonComponent, { BUTTON_TYPE } from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import {selectCartItems} from "../../store/cart/cart.selector";
import {useSelector} from "react-redux";

function CartDropdownComponent() {
  // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `checkout`;
    navigate(path);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {!cartItems.length && <EmptyMessage>No Items In Cart</EmptyMessage>}
        {cartItems &&
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))}
      </CartItems>
      <ButtonComponent buttonType={BUTTON_TYPE.base} onClick={routeChange}>
        Go to cart
      </ButtonComponent>
    </CartDropdownContainer>
  );
}

export default CartDropdownComponent;
