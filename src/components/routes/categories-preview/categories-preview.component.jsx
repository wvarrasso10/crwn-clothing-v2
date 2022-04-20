import React, {Fragment, useContext} from "react";
import {CategoryContext} from "../../../context/product.context";
import CategoryPreviewComponent from "../../category-preview/category-preview.component";
import "./categories-preview.styles.scss";

function CategoriesPreview() {
  const {categoryData} = useContext(CategoryContext);
  return (
    <Fragment>
      {Object.keys(categoryData).map((title) => {
        const products = categoryData[title];
        return (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
