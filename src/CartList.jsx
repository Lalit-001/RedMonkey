import React from "react";
import CartRow from "./CartRow";

function CartList({ product }) {
  return (
    <div>
      <div className="hidden md1:block">
        <div className="flex items-center justify-between gap-4 p-6 border border-gray-400 md:flex-row ">
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
          <div className="box-border w-32 text-base font-bold text-center ">
            {" "}
            Sub total
          </div>
        </div>
      </div>
      <div>
        {product.map(function (item) {
          return <CartRow key={item.id} {...item} />;
          // console.log("id is ", id);
        })}
      </div>
    </div>
  );
}
export default CartList;
