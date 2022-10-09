import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { useState } from "react";
import { cartContext } from "./CartPage";
import { useContext } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function CartRow({ id, thumbnail, title, price, subTotal }) {
  const {
    cartdata,
    setCartData,
    updateCart,
    localCart,
    setLocalCart,
    setLoading,
  } = useContext(cartContext);

  const [quantity, setQuantity] = useState(cartdata[id]);

  function handleQuantityChange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    console.log("now the cart is ", productId, newValue);
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
    setQuantity(newLocalCart[id]);
  }
  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productid");
    const newCart = { ...cartdata };
    console.log("product to be removed ", productId);
    delete newCart[productId];
    console.log(" cartdata", newCart);
    setCartData(newCart);
    updateCart(newCart);
    setLoading(true);
  }

  return (
    <div>
      {/*small screen layout------------*/}
      <div className="overflow-hidden bg-white border border-gray-400 md1:hidden">
        <div className="">
          <button
            onClick={handleRemove}
            productid={id}
            className="flex justify-end p-2 border-b border-b-gray-400"
          >
            <HiOutlineXCircle className="text-2xl text-gray-600 hover:text-red-400" />
          </button>
          <div className="flex justify-center p-2 border-b border-b-gray-400 ">
            <img src={thumbnail} className="w-32" />
          </div>
          <div className="flex justify-between p-2 border-b border-b-gray-400">
            <p className="font-semibold">Product:</p>
            <span className="font-semibold text-red-400">{title}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-b-gray-400">
            <p className="font-semibold">Price:</p>
            <span className="font-semibold ">{price}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-b-gray-400">
            <p className="font-semibold">Quantity:</p>
            <input
              className="w-10 p-1 font-semibold border border-gray-400"
              productid={id}
              value={quantity}
              min="1"
              max="8"
              type="number"
              onChange={handleQuantityChange}
            />
          </div>
          <div className="flex justify-between p-2 border-b border-b-gray-400">
            <p className="font-semibold">Subtotal:</p>
            <span className="font-semibold ">{price * quantity}</span>
          </div>
        </div>
      </div>

      {/*big  screen layout------------*/}
      <div className="hidden border border-gray-400 md1:block">
        <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row ">
          <div className="flex items-center gap-2">
            <button onClick={handleRemove} productid={id} className="w-4">
              {" "}
              <HiOutlineXCircle className="text-2xl text-gray-600 hover:text-red-400" />
            </button>
            <img className="box-border w-32 text-center" src={thumbnail} />
          </div>
          <div className="box-border w-40 mx-2 text-base font-bold text-center text-primary-dark">
            {title}
          </div>
          <div className="box-border w-32 text-base font-bold text-center">
            {price}
          </div>
          <div>
            <input
              className="box-border text-base font-bold text-center border border-gray-500 w-14"
              value={quantity}
              productid={id}
              type="number"
              min="1"
              max="8"
              onChange={handleQuantityChange}
            />
          </div>
          <div className="box-border w-32 text-base font-bold text-center ">
            {" "}
            Rs.{price * quantity}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartRow;
