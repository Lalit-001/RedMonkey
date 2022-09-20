import React from "react";
import CartRow from "./CartRow";

function CartList({ data, cartItem }) {
  return (
    <div>
      <div>
        {data.map(function (item) {
          const product = item;
          item.quantity = cartItem[item.id];
          return <CartRow key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}
export default CartList;

const obj = { 3: 3, 4: 7, 8: 9 };
const ids = Object.keys(obj);
const data = [
  { id: 3, name: "hii", price: 5 },
  { id: 4, name: "hello ", price: 7 },
  { id: 8, name: "kese ho", price: 77 },
];
const newdata = data.map(function (oneObj) {
  const x = oneObj;
  x.quantity = obj[oneObj.id];
  console.log("ids of data", oneObj.id);
  console.log("value of obj", obj[oneObj.id]);
});
