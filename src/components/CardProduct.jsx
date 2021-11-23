import React from "react";
import { Button, Card } from "react-bootstrap";
const CardProduct = ({
  id,
  name,
  price,
  img,
  description,
  item,
  handleAddToCart,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>BS {price}</Card.Text>
        <Button
          onClick={() => {
            handleAddToCart(item);
          }}
          variant="primary"
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
