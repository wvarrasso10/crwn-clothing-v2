import React, {useContext} from "react";
import {ProductContext} from "../../../context/product.context";
import ProductCardComponent from "../../product-card/product-card.component";
import "./shop.styles.scss";

function ShopComponent() {
  const {productData} = useContext(ProductContext);
  return (
    <div className="products-container">
      {productData.map((product) => (
        <ProductCardComponent key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default ShopComponent;
