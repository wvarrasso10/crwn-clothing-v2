import * as React from "react";
import { useContext } from "react";
import "./checkout-item.styles";
import RemoveIcon from "../../assets/remove-icon.png";
import {
  Arrow,
  CheckoutItemContainer,
  ImgContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
} from "./checkout-item.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

export const CheckoutItemComponent = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  // const { removeItemFromCart, addItemToCart, reduceQuantityOfItem } =
  //   useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems,cartItem));
  const reduceQuantity = () => dispatch(removeItemFromCart(cartItems,cartItem));
  const removeCartItem = () => dispatch(clearItemFromCart(cartItems,cartItem));
  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <img src={imageUrl} alt="checkout-item" />
      </ImgContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={reduceQuantity}>{"❮"}</Arrow>
        {quantity}
        <Arrow onClick={addProductToCart}>{"❯"}</Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton
        src={RemoveIcon}
        onClick={removeCartItem}
        alt="remove-icon"
      />
    </CheckoutItemContainer>
  );
};
export default CheckoutItemComponent;
