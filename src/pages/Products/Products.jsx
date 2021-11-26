import React from "react";
import { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import CardProduct from "../../components/CardProduct";
import "./Products.styles.css";
// import { Button } from "react-bootstrap";
const Products = () => {
  const { state, dispatch, width } = useContext(StoreContext);
  return (
    <div className="product-container">
      <div className="card-product">
        <div className="container">
          <div className="row">
            {state?.list?.map((item) => (
              <CardProduct
                key={item.id}
                img={item.image}
                name={item.title}
                price={item.price}
                dispatch={dispatch}
                item={item}
                width={width}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
