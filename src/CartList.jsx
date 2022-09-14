import React from "react";
import CartRow from "./CartRow";

function CartList({ cart }) {
  return (
    <div>
      {cart.map(function (items) {
        return <CartRow key={items.id} {...items} />;
      })}
    </div>
  );
}
export default CartList;
