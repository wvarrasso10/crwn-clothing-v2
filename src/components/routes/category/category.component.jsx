import React, {Fragment, useContext, useEffect, useState} from "react";
import {CategoryContext} from "../../../context/product.context";
import {useParams} from "react-router";
import ProductCardComponent from "../../product-card/product-card.component";
import "./category.styles.scss";

function Category() {
  const {category} = useParams();
  const {categoryData} = useContext(CategoryContext);
  const [products, setProducts] = useState(categoryData[category]);

  useEffect(() => {
    return () => {
      setProducts(categoryData[category]);
    };
  }, [category, categoryData]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCardComponent key={product.id} product={product}/>;
          })}
      </div>
    </Fragment>
  );
}

export default Category;
