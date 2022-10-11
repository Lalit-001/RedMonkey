import React, { createContext } from "react";
import CartList from "./CartList";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import { useState } from "react";
import Loading from "./LoadingPage";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";

export const cartContext = createContext();

function CartPage({ cart, updateCart }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const [cartdata, setCartData] = useState(cart);
  const [localCart, setLocalCart] = useState(cartdata);

  useEffect(
    function () {
      setLocalCart(cartdata);
    },
    [cartdata]
  );

  const productIds = Object.keys(cart);

  useEffect(
    function () {
      const promise = productIds.map(function (productId) {
        return getProductData(productId);
      });

      const bigPromise = Promise.all(promise);
      bigPromise
        .then(function (products) {
          setProductList(products);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [cartdata]
  );

  function handleUpdateButton() {
    updateCart(localCart);
  }
  const prices = productList.map(function (item) {
    return item.price;
  });

  const subTotal = prices.reduce(function (a, b) {
    return a + b;
  }, 0);

  const [total, setTotal] = useState(subTotal);

  function handleApplyChange() {
    if (event.target.value == "ADHIKARI89") {
      setValid(true);
    }
  }
  function handleApplyButton() {
    if (valid) {
      setTotal(subTotal - subTotal * 0.15);
      return;
    }
  }

  const data = {
    cartdata,
    setCartData,
    updateCart,
    localCart,
    setLocalCart,
    setLoading,
  };
  if (loading) {
    return <Loading />;
  }

  if (productList == false) {
    return <EmptyCart />;
  }

  return (
    <div className="">
      <cartContext.Provider value={data}>
        <div className="flex flex-col p-6 bg-white md:px-20 md:py-14">
          <Link to="/">
            <AiFillHome className="self-start text-2xl text-primary-dark hover:text-black" />{" "}
          </Link>

          <div className="bg-white border border-gray-400 ">
            <div className="">
              <CartList product={productList} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 px-4 py-8 overflow-hidden border border-gray-400 md1:flex-row ">
            <div className="flex flex-col justify-between gap-2 md:flex-row ">
              <input
                type="string"
                className="text-center border border-gray-700 "
                placeholder="Coupon Code"
                onChange={handleApplyChange}
              />
              <button
                onClick={handleApplyButton}
                className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default"
              >
                APPLY COUPON
              </button>
            </div>
            <button
              onClick={handleUpdateButton}
              className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default"
            >
              Update Cart
            </button>
          </div>

          <div className="flex flex-col my-6 overflow-hidden border border-gray-400 rounded-sm md1:self-end">
            <span className="p-4 text-xl font-bold bg-gray-200 border-b border-b-gray-400">
              Cart Totals{" "}
            </span>
            <div className="flex flex-col px-4 py-2">
              <span className="w-80"></span>
              <div className="flex justify-between p-4 font-semibold border-b border-t-gray-400 ">
                <span>Subtotal</span>
                <span>{subTotal}</span>
              </div>
              <div className="flex justify-between p-4 font-semibold border-b border-t-gray-400 ">
                <span>total</span>
                <span>{total}</span>
              </div>
              <button className="p-4 font-semibold text-center text-white bg-red-400 rounded-md texy-lg hover:bg-red-600">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </cartContext.Provider>
    </div>
  );
}
export default CartPage;
