import React from "react";
// Images
import { Button } from "react-bootstrap";
import funko1 from "../../images/funko.jpg";
import "./Home.styles.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-phrase">
        OFRECEMOS LA MEJOR EXPERIENCIA EN TUS COMPRAS
      </div>
      <p className="home-description">
        XZONE es una tienda en línea dedicada a la venta de Souvenirs con
        opciones flexibles de pagos y envíos somos la tienda virtual que lo
        tiene todo.
      </p>
      <div className="home-container">
        <figure className="home-figure">
          <img className="figure-img" src={funko1} alt="" />
        </figure>
        <div className="description-product">
          <h1>NAME PRODUCT</h1>
          <span>Description</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            explicabo consequuntur officiis debitis beatae ipsum iure fugiat ut,
            iste id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae neque dicta reiciendis dolorem dolor aliquid expedita
            corporis doloribus quod cupiditate.
          </p>
          <Button>Show Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
