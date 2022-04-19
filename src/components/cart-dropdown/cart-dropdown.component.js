import React, {useContext} from "react";
import "./cart-dropdown.styles.scss";
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart-context";
import {useNavigate} from "react-router";

function CartDropdownComponent() {
  const {cartItems} = useContext(CartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `checkout`;
    navigate(path);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {!cartItems.length && <span>No Items In Cart</span>}
        {cartItems &&
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item}/>
          ))}
      </div>
      <ButtonComponent onClick={routeChange}>Go to cart</ButtonComponent>
    </div>
  );
}

export default CartDropdownComponent;
