import React from "react";
import { GiCrossedSlashes } from "react-icons/gi";
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
    <div className="border border-gray-400 ">
      <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row ">
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
        <input
          className="box-border w-32 text-base font-bold text-center border border-gray-500"
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
      <button
        onClick={DeleteButton}
        className="px-4 py-1 m-2 border border-gray-500 rounded-md bg-primary-default"
      >
        delete
      </button>
    </div>
  );
}
export default CartRow;
