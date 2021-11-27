import React, { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useReducer } from "react";
const StoreContext = createContext();
//Funcion reductora
const initialState = {
  cart: [],
  total: 0,
  list: [],
  repeat: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newItemCart = action.payload.id;
      let itemInCart = state.cart.find((item) => item.id === newItemCart);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item,
            ),
            total: state.total + action.payload.price,
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, count: 1 }],
            total: state.total + action.payload.price,
          };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.count,
      };
    case "GET_DATA":
      return {
        ...state,
        list: action.payload,
      };
    case "REMOVE_ONE_FROM_CART": {
      let itemToDelete = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      return itemToDelete.count > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count - 1 }
                : item,
            ),
            total: state.total - action.payload.price,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            total: state.total - action.payload.price * action.payload.count,
          };
    }

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  // const [repeat, setRepeat] = useState([]);
  const { width } = useWindowDimensions();
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    dispatch({ type: "GET_DATA", payload: result });
  };
  useEffect(() => {
    getData();
  }, []);

  // const handleRemoveOneToCart = (product) => {
  //   if (product.count === 1) {
  //     setCart(cart.filter((item) => item.id !== product.id));
  //   } else {
  //     setRepeat(
  //       repeat.map((item) =>
  //         item.id === product.id ? { ...item, count: item.count - 1 } : item,
  //       ),
  //     );
  //   }
  //   setTotal(total - product.price);
  // };

  const data = {
    // cart,
    // total,

    width,
    state,
    // handleAddToCart,
    // handleRemoveToCart,
    // handleRemoveOneToCart,
    dispatch,
  };
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
export default StoreContext;
export { StoreProvider };
