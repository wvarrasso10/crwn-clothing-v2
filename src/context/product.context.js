import {createContext, useState} from "react";
import SHOP_DATA from "../shop-data.json";
// as the actual value you want to access
export const ProductContext = createContext({
  productData: [],
  setProductData: () => null,
});

export const ProductProvider = ({children}) => {
  const [productData, setProductData] = useState(SHOP_DATA);
  const value = {productData, setProductData};

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
