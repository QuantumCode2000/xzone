import React, { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useReducer } from "react";
const StoreContext = createContext();
//Funcion reductora
const initialState = {
  cart: [],
  total: 0,
  list: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case "REMOVE_ONE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case "GET_DATA":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [repeat, setRepeat] = useState([]);
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

  //Funciones
  // const handleAddToCart = (item) => {
  //   setCart([...cart, item]);
  //   setTotal(total + item.price);
  // };
  // const handleRemoveToCart = (product) => {
  //   setCart(cart.filter((item) => item.id !== product.id));
  //   setTotal(total - product.price * product.count);
  // };

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
  //   console.log("product", product);
  //   setTotal(total - product.price);
  // };
  const handleAddCount = () => {
    let newList = deleteDuplicates(state.cart).sort(function (a, b) {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    let [obj, r, k] = handleCountProduct(state.cart);
    for (let i = 0; i < r; i++) {
      newList[i].count = obj[k[i]];
    }
    setRepeat(newList);
  };
  // * --------------------------------------

  const getLengthOfObject = (obj) => {
    let lengthOfObject = Object.keys(obj).length;
    let keys = Object.keys(obj);
    return [lengthOfObject, keys];
  };
  const handleCountProduct = (cart) => {
    let r = {};
    let dates = [];
    cart.forEach((item) => (r[item.id] = (r[item.id] || 0) + 1));
    dates.push(r);
    const [lengthOfObject, keys] = getLengthOfObject(r);
    dates.push(lengthOfObject);
    dates.push(keys);
    return dates;
  };
  const deleteDuplicates = (array) => {
    let hash = {};
    array = array.filter((item) =>
      hash[item.id] ? false : (hash[item.id] = true),
    );
    return array;
  };
  // * --------------------------------------

  const data = {
    // cart,
    // total,
    repeat,
    width,
    state,
    // handleAddToCart,
    // handleRemoveToCart,
    handleAddCount,
    // handleRemoveOneToCart,
    dispatch,
  };
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
export default StoreContext;
export { StoreProvider };
