import React from "react";
import Productlistpage from "./Productlistpage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Error from "./ErrorPage";
import CartPage from "./CartPage";
import { useState } from "react";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  console.log("store ki hui cart", cart);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
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
          <Route path="/cart" element={<CartPage cart={cart} />}></Route>
          */
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;

const randomNumbers = [10, 123, 25, 78, 11];
const lessThanTen = randomNumbers.findIndex((num) => {
  return num < 10;
});
console.log("test random", lessThanTen);
