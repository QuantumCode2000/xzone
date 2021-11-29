import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//Context
import StoreContext from "../../context/StoreContext";
import ListCart from "../../components/ListCart/ListCart";
const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      <ul className="list-group mb-3">
        {state?.cart?.map((item) => (
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
          <strong>{state.total.toFixed(2)}</strong>
        </li>
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>

        <Button
          variant="danger"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </Button>
      </ul>
    </div>
  );
};

export default Cart;
