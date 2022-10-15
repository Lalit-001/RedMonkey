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
import Alert from "./Alert";

import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";

import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [user, setUser] = useState();
  const [cart, setCart] = useState(savedData);

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

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200 ">
      <AlertProvider>
        <UserProvider user={user} setUser={setUser}>
          {user && <Navbar productCount={totalCount} setCart={setCart} />}

          <div className="flex flex-col justify-center max-w-6xl m-auto my-8 grow">
            <Alert />

            <Routes>
              <Route
                index
                element={
                  <UserRoute>
                    <Productlistpage />
                  </UserRoute>
                }
              ></Route>
              <Route
                path="/Products/:id"
                element={
                  <UserRoute>
                    <ProductDetail onAddToCart={handleAddToCart} />
                  </UserRoute>
                }
              ></Route>
              <Route
                path="/cart"
                element={
                  <UserRoute>
                    <CartPage cart={cart} updateCart={updateCart} />
                  </UserRoute>
                }
              ></Route>

              {/* -------------------------auth-----------------*/}
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <LoginPage />
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/signUp"
                element={
                  <AuthRoute>
                    <SignUpPage />
                  </AuthRoute>
                }
              ></Route>
              {/* -------------------------auth-----------------*/}

              <Route path="/forget" element={<ForgetPassPage />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Routes>
          </div>
          {user && <Footer />}
        </UserProvider>
      </AlertProvider>
    </div>
  );
}
export default App;
//
