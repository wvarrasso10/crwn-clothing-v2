import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../../utils/firebase.utils";
import {setCategories} from "../../../store/category/category.action";
function ShopComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      console.log(categoryArray);
      dispatch(setCategories(categoryArray))
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
