import React, { Fragment, useContext, useEffect } from "react";
import { CategoryContext } from "../../../context/product.context";
import CategoryPreviewComponent from "../../category-preview/category-preview.component";
import "./categories-preview.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesMap,
  selectCurrentCategory,
} from "../../../store/category/category.selector";
import { getCategoriesAndDocuments } from "../../../utils/firebase.utils";
import { setCategoryData } from "../../../store/category/category.action";

function CategoriesPreview() {
  /*
  const { categoryData } = useContext(CategoryContext);
*/

  const categoryData = useSelector(selectCurrentCategory);
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
