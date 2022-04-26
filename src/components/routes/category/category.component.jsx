import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCardComponent from "../../product-card/product-card.component";
import "./category.styles";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../../store/category/category.selector";

function Category() {
  const { category } = useParams();
  const categoryData = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoryData[category]);

  useEffect(() => {
    return () => {
      setProducts(categoryData[category]);
    };
  }, [category, categoryData]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCardComponent key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;
