import React from "react";
import CartList from "./CartList";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import { useState } from "react";
import Loading from "./LoadingPage";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";

function CartPage({ cart }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const valid = true;

  console.log("cart is ", cart);
  const cartData = cart;
  const productIds = Object.keys(cart);

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
      <div className="flex flex-col p-6 bg-white md:px-20 md:py-14">
        <Link to="/">
          <AiFillHome className="self-start text-2xl text-primary-dark hover:text-black" />{" "}
        </Link>
        {/*------------for small screen ---------*/}
        <div className="overflow-hidden border border-gray-400 md1:hidden">
          <CartList data={productList} cartItem={cartData} />
          <div className="flex flex-col gap-2 p-3">
            <div className="flex justify-between gap-2">
              <input
                placeholder="Coupon Code"
                className="w-32 px-2 font-semibold border border-gray-400 md:w-44 md:font-semibold md:px-4 "
              />
              <button className="px-2 font-semibold text-white bg-red-500 rounded-sm md:font-semibold md:py-1 md:px-4 hover:bg-red-600">
                Apply Coupon
              </button>
            </div>
            <button
              disabled={valid}
              className="px-3 py-1 font-bold text-white bg-red-500 disabled:hover:bg-white disabled:text-gray-500 disabled:bg-red-300"
            >
              Update cart
            </button>
          </div>
        </div>
        {/*--------------big screen -----------*/}
        <div className="hidden p-24 bg-white border border-gray-400 md1:block ">
          <div>
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
          </div>
          <CartList data={productList} cartItem={cartData} />
          <div className="flex justify-between px-4 py-8 border border-gray-400 ">
            <div className="flex gap-4">
              <input
                type="string"
                className="text-center border border-gray-700 "
                placeholder="Coupon Code"
              />
              <button className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default">
                APPLY COUPON
              </button>
            </div>
            <button className="px-4 py-1 border border-gray-500 rounded-md bg-primary-default">
              Update Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
