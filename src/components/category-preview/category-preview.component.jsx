import React from "react";
import "./category-preview.styles.scss";
import ProductCardComponent from "../product-card/product-card.component";
import {Link} from "react-router-dom";

function CategoryPreviewComponent({title, products}) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product}/>
          ))}
      </div>
    </div>
  );
}

export default CategoryPreviewComponent;
