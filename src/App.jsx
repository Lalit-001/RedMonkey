import React from "react";
import Productlistpage from "./Productlistpage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Error from "./ErrorPage";
import CartPage from "./CartPage";
import { useState } from "react";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import ForgetPassPage from "./ForgetPassPage";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  console.log("cart coming from detailpage", cart);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  function handleUpdateCart(id, quantity) {
    const newCart = { ...cart, [id]: quantity };
    console.log("cart and id", cart, id, quantity);
    console.log("new cart is", newCart);
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (privious, current) {
    return privious + cart[current];
  }, 0);
  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200 ">
      <Navbar productCount={totalCount} />
      <div className="flex flex-col justify-center grow">
        <Routes>
          <Route index element={<Productlistpage />}></Route>
          <Route
            path="/Products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <CartPage cart={cart} handleUpdateCart={handleUpdateCart} />
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
          <Route path="/forget" element={<ForgetPassPage />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
