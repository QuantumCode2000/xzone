import React from "react";
import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import imageP from "../../images/funko.jpg";
import "./Products.styles.css";
import { Button } from "react-bootstrap";
const Products = () => {
  const { list, handleAddToCart } = useContext(StoreContext);
  return (
    <div className="product-container">
      <div className="card-product">
        {list?.map((item) => (
          <li key={item.id}>
            <img
              style={{
                width: 200,
              }}
              src={imageP}
              alt={item.name}
            />
            <br />
            <span>
              {item.name} BS{item.price}
            </span>
            <br />
            <Button onClick={() => handleAddToCart(item)}>
              Agregar al carrito
            </Button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Products;
