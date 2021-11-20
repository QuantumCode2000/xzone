import React from "react";
import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import imageP from "../../images/funko.jpg";
const Products = () => {
  const { list, handleAddToCart } = useContext(StoreContext);

  return (
    <div>
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
          <button onClick={() => handleAddToCart(item)}>
            Agregar al carrito
          </button>
        </li>
      ))}
    </div>
  );
};

export default Products;
