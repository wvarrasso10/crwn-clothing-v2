import React from "react";
import "./category-preview.styles";
import ProductCardComponent from "../product-card/product-card.component";
import {CategoryPreviewContainer, Preview, Title,} from "./category-preview.styles";

function CategoryPreviewComponent({title, products}) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product}/>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreviewComponent;
