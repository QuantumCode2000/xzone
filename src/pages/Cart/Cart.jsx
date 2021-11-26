import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//Context
import StoreContext from "../../context/StoreContext";
import ListCart from "../../components/ListCart/ListCart";
const Cart = () => {
  const {
    state,
    // handleRemoveToCart,
    handleAddCount,
    // handleRemoveOneToCart,
    repeat,
    dispatch,
  } = useContext(StoreContext);
  console.log("cart", repeat);

  useEffect(() => {
    handleAddCount();
    // eslint-disable-next-line
  }, [state.cart]);
  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      <ul className="list-group mb-3">
        {repeat?.map((item) => (
          <ListCart
            key={item.id}
            id={item.id}
            name={item.title}
            description={item.description}
            item={item}
            count={item.count}
            price={item.price}
            // handleRemoveToCart={handleRemoveToCart}
            dispatch={dispatch}
            // handleRemoveOneToCart={handleRemoveOneToCart}
          />
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (Bs)</span>
          <strong>{state.total}</strong>
        </li>
      </ul>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default Cart;
