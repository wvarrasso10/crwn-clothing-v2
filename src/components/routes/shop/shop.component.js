import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoryProvider } from "../../../context/product.context";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../../utils/firebase.utils";
import { setCategoryData } from "../../../store/category/category.action";
function ShopComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("here");
      dispatch(setCategoryData(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    /*<CategoryProvider>*/
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    /*</CategoryProvider>*/
  );
}

export default ShopComponent;
