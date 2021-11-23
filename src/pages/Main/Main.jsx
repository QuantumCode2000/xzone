import React from "react";
import src from "../../videos/XZONE.mp4";
const Main = () => {
  return (
    <div>
      <video autostart autoPlay src={src} type="video/mp4" />
    </div>
  );
};

export default Main;
