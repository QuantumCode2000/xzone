import React from "react";
import { Button } from "react-bootstrap";

const ListCart = ({ id, name, price, count, item, dispatch, description }) => {
  return (
    <div>
      <li
        key={id}
        className="list-group-item d-flex justify-content-between lh-condensed"
      >
        <div>
          <h6 className="my-0">{name}</h6>
          <small className="text-muted">{description}</small>
          <Button
            variant="danger"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: { ...item } })
            }
          >
            Eliminar
          </Button>
        </div>
        <span className="text-muted">Bs {price}</span>
        <Button
          variant="info"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...item },
            });
          }}
        >
          +
        </Button>
        <span className="text-muted">Cant. {count}</span>
        <Button
          variant="info"
          onClick={() => {
            dispatch({ type: "REMOVE_ONE_FROM_CART", payload: { ...item } });
          }}
        >
          -
        </Button>
      </li>
    </div>
  );
};

export default ListCart;
