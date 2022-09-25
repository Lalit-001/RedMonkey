import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-6xl p-8 mx-auto bg-white md:p-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-serif text-3xl font-extrabold">
            {" "}
            Your cart is empty !!
          </h1>
          <Link
            to="/"
            className="self-start px-4 py-2 font-bold bg-red-400 rounded-md "
          >
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
export default EmptyCart;
