import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const MianLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MianLayout;
