import React from "react";
import { GiCrossedSlashes } from "react-icons/gi";

function CartRow({ thumbnail, title, price, quantity, subTotal }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-6 border border-gray-400 md:flex-row ">
      <div className="flex items-center gap-2">
        <div className="w-4">
          {" "}
          <GiCrossedSlashes />
        </div>
        <img className="box-border w-32 text-center" src={thumbnail} />
      </div>
      <div className="box-border w-40 mx-2 text-base font-bold text-center text-primary-dark">
        {title}
      </div>
      <div className="box-border w-32 text-base font-bold text-center">
        {price}
      </div>
      <div className="box-border w-32 text-base font-bold text-center border border-gray-500">
        {quantity}
      </div>
      <div className="box-border w-32 text-base font-bold text-center border ">
        {" "}
        Rs.{price * quantity}
      </div>
    </div>
  );
}
export default CartRow;
