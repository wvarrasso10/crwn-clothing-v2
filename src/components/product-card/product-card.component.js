import React, { useContext } from "react";
import "./product-card.styles";
import ButtonComponent, { BUTTON_TYPE } from "../button/button.component";
import { CartContext } from "../../context/cart-context";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../../store/category/category.action";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

function ProductCardComponent({ product }) {
  const { name, imageUrl, price } = product;
    console.log(product)
  let cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
/*
  const { addItemToCart } = useContext(CartContext);
*/
    console.log(cartItems)
    console.log(product)

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
/*
  const addProductToCart = () => addItemToCart(product);
*/
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
