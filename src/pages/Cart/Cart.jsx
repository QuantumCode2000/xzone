import React, { useContext } from "react";

//Context
import StoreContext from "../../context/StoreContext";
import { Button } from "react-bootstrap";
const Cart = () => {
  const { cart, total, handleRemoveToCart } = useContext(StoreContext);

  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      {/* {cart.map((item) => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <Button variant="danger" onClick={() => handleRemoveToCart(item)}>
            Eliminar
          </Button>
        </div>
      ))} */}
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            class="list-group-item d-flex justify-content-between lh-condensed"
          >
            <div>
              <h6 class="my-0">{item.name}</h6>
              <small class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                saepe?
              </small>
              <Button variant="danger" onClick={() => handleRemoveToCart(item)}>
                Eliminar
              </Button>
            </div>

            <span class="text-muted">Bs {item.price}</span>
          </li>
        ))}
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (Bs)</span>
          <strong>{total}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
