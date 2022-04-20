import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase.utils";

// as the actual value you want to access
export const CategoryContext = createContext({
  categoryData: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState({});
  //ep calls in use effect must be in async func

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoryData(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoryData };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
