import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find id cartItems contains productToAdd
  if (cartItems.includes(productToAdd)) {
    cartItems[cartItems.indexOf(productToAdd)].quantity += 1;
    return [...cartItems];
  }
  productToAdd.quantity = 1;
  cartItems.push(productToAdd);
  return [...cartItems];

  //es6 way of doing it
  /* const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  return [cartItems, { ...productToAdd, quantity: 1 }];*/
};

const removeCartItem = (cartItems, productToRemove) => {
  //es6 way of doing it
  const resultItems = cartItems.filter(
    (item) => item.id === productToRemove.id
  );
  return [...resultItems];
};

const reduceQuantity = (cartItems, productToReduce) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToReduce.id && productToReduce.quantity !== 1
      ? {...cartItem, quantity: (cartItem.quantity -= 1)}
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {
  },
  cartItems: [],
  addItemToCart: () => {
  },
  cartCount: 0,
  removeItemFromCart: () => {
  },
  reduceQuantityOfItem: () => {
  },
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const reduceQuantityOfItem = (productToRemove) => {
    setCartItems(reduceQuantity(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    reduceQuantityOfItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
