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
  const valid = true;
  const [cartdata, setCartData] = useState(cart);

  const data = { cartdata, setCartData, updateCart };
  // console.log("cartdata at page", cartdata);

  function updateButton() {
    updateCart(+productIds, cartdata[productIds]);
  }

  const productIds = Object.keys(cart);
  console.log("product ids", productIds);

  useEffect(function () {
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (productList == false) {
    return <EmptyCart />;
  }

  return (
    <div className="p-4 bg-gray-200 ">
      <cartContext.Provider value={data}>
        <div className="flex flex-col p-6 bg-white md:px-20 md:py-14">
          <Link to="/">
            <AiFillHome className="self-start text-2xl text-primary-dark hover:text-black" />{" "}
          </Link>
          {/*------------for small screen ---------*/}
          <div className="overflow-hidden border border-gray-400 md1:hidden">
            <CartList data={productList} />
          </div>
          {/*--------------big screen -----------*/}
          <div className="hidden p-24 bg-white border border-gray-400 md1:block ">
            <div className="">
              <div className="flex flex-col items-center justify-between gap-4 p-6 border border-gray-400 md:flex-row ">
                <div className="flex items-center gap-2">
                  <div className="w-4">
                    {" "}
                    <span></span>
                  </div>
                  <span className="box-border w-32 text-center"></span>
                </div>
                <div className="box-border w-40 mx-2 text-base font-bold text-center ">
                  Product
                </div>
                <div className="box-border w-32 text-base font-bold text-center ">
                  price
                </div>
                <div className="box-border w-32 text-base font-bold text-center">
                  Quantity
                </div>
                <div className="box-border w-32 text-base font-bold text-center border ">
                  {" "}
                  Sub total
                </div>
              </div>

              <CartList data={productList} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 px-4 py-8 border border-gray-400 md1:flex-row ">
            <div className="flex justify-between gap-4">
              <input
                type="string"
                className="text-center border border-gray-700 "
                placeholder="Coupon Code"
              />
              <button className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default">
                APPLY COUPON
              </button>
            </div>
            <button
              onClick={updateButton}
              className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default"
            >
              Update Cart
            </button>
          </div>
        </div>
      </cartContext.Provider>
    </div>
  );
}
export default CartPage;
