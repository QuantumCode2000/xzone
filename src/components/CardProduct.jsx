import React from "react";
import { Button, Card } from "react-bootstrap";
const CardProduct = ({
  id,
  name,
  price,
  img,
  description,
  item,
  dispatch,
  width,
}) => {
  return (
    <div className="col-sm">
      {width <= 500 ? (
        <>
          <div className="container-card-product">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>BS {price}</Card.Text>
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...item },
                  });
                }}
                variant="primary"
              >
                Add to Cart
              </Button>
            </Card.Body>
          </div>
        </>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>BS {price}</Card.Text>
            <Button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: { ...item } });
              }}
              variant="primary"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CardProduct;
