import * as React from "react";
import {useContext} from "react";
import "./checkout-item.styles.scss";
import {CartContext} from "../../context/cart-context";
import RemoveIcon from "../../assets/remove-icon.png";

export const CheckoutItemComponent = ({cartItem}) => {
  const {imageUrl, name, quantity, price} = cartItem;
  const {removeItemFromCart, addItemToCart, reduceQuantityOfItem} =
    useContext(CartContext);
  const addProductToCart = () => addItemToCart(cartItem);
  const reduceQuantity = () => reduceQuantityOfItem(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl}/>
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={reduceQuantity}>
          {"❮ "}
        </div>
        {quantity}
        <div className="arrow" onClick={addProductToCart}>
          {" ❯"}
        </div>
      </div>
      <div className="price">{price * quantity}</div>
      <img
        src={RemoveIcon}
        className="remove-button"
        onClick={removeItemFromCart}
        alt="remove-icon"
      />
    </div>
  );
};
export default CheckoutItemComponent;
