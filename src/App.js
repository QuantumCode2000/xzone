import "./App.css";

import MianLayout from "./layout/MianLayout";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import { StoreProvider } from "./context/StoreContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <StoreProvider>
      <Router>
        <MianLayout>
          <Routes>
            <Route index path="/" exact element={<Home />} />
            <Route path="/product" exact element={<Products />} />

            <Route path="/contact" exact element={<Contact />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
        </MianLayout>
      </Router>
    </StoreProvider>
  );
}

export default App;
