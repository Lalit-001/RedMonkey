import React from "react";
import Productlistpage from "./Productlistpage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Error from "./ErrorPage";
import CartPage from "./CartPage";
import { useState } from "react";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import ForgetPassPage from "./ForgetPassPage";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
// import UserRoute from "./UserRoute";
// import AuthRoute from "./AuthRoute";
import Loading from "./LoadingPage";

// export const userContext = createContext();

function App() {
  console.log("app run");
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [user, setUser] = useState();
  const [cart, setCart] = useState(savedData);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("api call nhi hui app component wali");
        });
    } else {
      setLoading(false);
    }
  }, []);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (privious, current) {
    return privious + cart[current];
  }, 0);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200 ">
      {/* <userContext.Provider value={data}> */}
      <Navbar productCount={totalCount} user={user} setUser={setUser} />
      <div className="flex flex-col justify-center grow">
        <Routes>
          <Route
            index
            element={<Productlistpage setUser={setUser} user={user} />}
          ></Route>
          <Route
            path="/Products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<CartPage cart={cart} updateCart={updateCart} />}
          ></Route>
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          ></Route>
          <Route
            path="/signUp"
            element={<SignUpPage setUser={setUser} user={user} />}
          ></Route>
          <Route path="/forget" element={<ForgetPassPage />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
      {/* </userContext.Provider> */}
    </div>
  );
}
export default App;
//
