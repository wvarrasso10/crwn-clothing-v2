import React, { Fragment } from "react";
import CategoryPreviewComponent from "../../category-preview/category-preview.component";
import "./categories-preview.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesMap,
} from "../../../store/category/category.selector";

function CategoriesPreview() {
  const categoryData = useSelector(selectCategoriesMap);
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
