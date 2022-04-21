import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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
  const resultItems = cartItems.filter(
    (item) => item.id === productToRemove.id
  );
  return [...resultItems];
};

const reduceQuantity = (cartItems, productToReduce) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToReduce.id && productToReduce.quantity !== 1
      ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  reduceQuantityOfItem: () => {},
});

export const CART_ACTION_TYPES = {
  IS_CART_OPEN: "IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // always spread through current values of state and modify only values in payload
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      const { newCartItems, count, cartTotal } = payload;
      return {
        ...state,
        cartItems: newCartItems,
        cartCount: count,
        total: cartTotal,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (isOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.IS_CART_OPEN, { payload: isOpen }));
  };

  const updateCartItems = (newCartItems) => {
    let count = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    let cartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        newCartItems,
        count,
        cartTotal,
      })
    );
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItems(removeCartItem(cartItems, productToRemove));
  };

  const addItemToCart = (productToAdd) => {
    updateCartItems(addCartItem(cartItems, productToAdd));
  };

  const reduceQuantityOfItem = (productToRemove) => {
    updateCartItems(reduceQuantity(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    reduceQuantityOfItem,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
