import React, { useContext } from "react";

//Context
import StoreContext from "../../context/StoreContext";
import { Button } from "react-bootstrap";
const Cart = () => {
  const { cart, handleRemoveToCart } = useContext(StoreContext);

  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      {cart.map((item) => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <Button variant="danger" onClick={() => handleRemoveToCart(item)}>
            Eliminar
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
