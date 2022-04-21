import React from "react";
import { Route, Routes } from "react-router";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoryProvider } from "../../../context/product.context";
function ShopComponent() {
  return (
    <CategoryProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoryProvider>
  );
}

export default ShopComponent;
