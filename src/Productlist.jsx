import React from "react";
import Product from "./Product";

function Productlist({ Products }) {
  return (
    <div className="grid grid-cols-2 md:gap-4 md:grid-cols-3">
      {Products.map(function (item) {
        return <Product key={item.id} {...item} />;
      })}
      <span className="w-64"></span>
      <span className="w-64"></span>
      <span className="w-64"></span>
    </div>
  );
}
export default Productlist;
