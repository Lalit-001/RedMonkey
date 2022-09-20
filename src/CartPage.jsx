import React from "react";
import CartList from "./CartList";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import { useState } from "react";
import Loading from "./LoadingPage";
import { useEffect } from "react";

function CartPage({ cart }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-4 bg-gray-200 md:p-24">
      <div className="w-32 my-3">
        <Link to="/">
          <AiFillHome className="text-2xl text-primary-dark hover:text-black" />{" "}
        </Link>
      </div>
      <div className="p-24 bg-white border border-gray-400 ">
        <div>
          <div className="flex flex-col items-center justify-between gap-4 p-6 border border-gray-400 md:flex-row ">
            <div className="flex items-center gap-2">
              <div className="w-4">
                {" "}
                <span></span>
              </div>
              <span className="box-border w-32 text-center"></span>
            </div>
            <div className="box-border w-40 mx-2 text-base font-bold text-center">
              Product
            </div>
            <div className="box-border w-32 text-base font-bold text-center">
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
  );
}
export default CartPage;
