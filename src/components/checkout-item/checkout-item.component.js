import * as React from "react";
import { useContext } from "react";
import "./checkout-item.styles";
import { CartContext } from "../../context/cart-context";
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

export const CheckoutItemComponent = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeItemFromCart, addItemToCart, reduceQuantityOfItem } =
    useContext(CartContext);
  const addProductToCart = () => addItemToCart(cartItem);
  const reduceQuantity = () => reduceQuantityOfItem(cartItem);
  const removeCartItem = () => removeItemFromCart(cartItem);
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
