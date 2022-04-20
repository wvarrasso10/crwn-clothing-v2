import React, {useContext} from "react";
import "./product-card.styles.scss";
import ButtonComponent from "../button/button.component";
import {CartContext} from "../../context/cart-context";

function ProductCardComponent({product}) {
  const {name, imageUrl, price} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </ButtonComponent>
    </div>
  );
}

export default ProductCardComponent;
