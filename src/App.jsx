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
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;

/*const stu = {
  name: "lalit",
  class: "bsc2nd",
  age: 20,
  profesiion: "front end developer ",
  aadress: "ramnagar ",
};
const keys = Object.keys(stu);
const totalKeys = keys.length;
console.log("keys are", keys);
console.log("total no of keys in object", totalKeys);
console.log("values in student is", Object.values(stu));

const target = { a: 1, b: 5 };
const source = { b: 4, c: 5 };
const returnTarget = Object.assign(target, source);
console.log("target", target);
console.log("source ", source);
console.log("new var", returnTarget);*/
