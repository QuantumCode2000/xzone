import "./App.css";
import MianLayout from "./layout/MianLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Checkout from "./pages/Checkout/Checkout";
import { StoreProvider } from "./context/StoreContext";
import { UserProvider } from "./context/UserContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <UserProvider>
      <StoreProvider>
        <Router>
          <MianLayout>
            <Routes>
              <Route index path="/" exact element={<Main />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/product" exact element={<Products />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/checkout" exact element={<Checkout />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
          </MianLayout>
        </Router>
      </StoreProvider>
    </UserProvider>
  );
}
export default App;
