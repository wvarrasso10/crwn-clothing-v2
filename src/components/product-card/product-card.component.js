import React, {useContext} from "react";
import "./product-card.styles";
import ButtonComponent, {BUTTON_TYPE} from "../button/button.component";
import {CartContext} from "../../context/cart-context";
import {Footer, Name, Price, ProductCardContainer,} from "./product-card.styles";

function ProductCardComponent({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPE.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ButtonComponent>
    </ProductCardContainer>
  );
}

export default ProductCardComponent;
