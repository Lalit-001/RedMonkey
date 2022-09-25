import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { useState } from "react";

function CartRow({ id, thumbnail, title, price, quantity }) {
  const [total, setTotal] = useState(quantity);
  function DeleteButton() {
    setTotal(0);
  }
  function handleQuantityChange() {
    setTotal(+event.target.value);
  }

  if (total == 0) {
    return <div></div>;
  }
  return (
    <div>
      {/*small screen layout------------*/}
      <div className="bg-white md1:hidden">
        <div className="">
          <div className="flex justify-end p-2 border-b border-b-gray-400">
            <HiOutlineXCircle
              onClick={DeleteButton}
              className="text-2xl text-gray-600 hover:text-red-400"
            />
          </div>
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
              value={total}
              type="number"
              min="0"
              onChange={handleQuantityChange}
            />
          </div>
          <div className="flex justify-between p-2 border-b border-b-gray-400">
            <p className="font-semibold">Subtotal:</p>
            <span className="font-semibold ">{price * total}</span>
          </div>
        </div>
      </div>

      {/*big  screen layout------------*/}
      <div className="hidden border border-gray-400 md1:block">
        <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row ">
          <div className="flex items-center gap-2">
            <div className="w-4">
              {" "}
              <HiOutlineXCircle
                onClick={DeleteButton}
                className="text-2xl text-gray-600 hover:text-red-400"
              />
            </div>
            <img className="box-border w-32 text-center" src={thumbnail} />
          </div>
          <div className="box-border w-40 mx-2 text-base font-bold text-center text-primary-dark">
            {title}
          </div>
          <div className="box-border w-32 text-base font-bold text-center">
            {price}
          </div>
          <input
            className="box-border text-base font-bold text-center border border-gray-500 w-14"
            value={total}
            type="number"
            min="0"
            onChange={handleQuantityChange}
          />
          <div className="box-border w-32 text-base font-bold text-center ">
            {" "}
            Rs.{price * total}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartRow;
