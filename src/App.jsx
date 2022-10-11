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
import { useEffect } from "react";
import axios from "axios";
import Loading from "./LoadingPage";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import Alert from "./Alert";
import { alertContext, userContext } from "./Contexts";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [user, setUser] = useState();
  const [cart, setCart] = useState(savedData);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
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

  const removeAlert = () => {
    setAlert(undefined);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200 ">
      <userContext.Provider value={{ user, setUser }}>
        <alertContext.Provider value={{ alert, setAlert, removeAlert }}>
          {user && (
            <Navbar
              productCount={totalCount}
              setCart={setCart}
              user={user}
              setUser={setUser}
            />
          )}

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
        </alertContext.Provider>
      </userContext.Provider>
    </div>
  );
}
export default App;
//
