import React from "react";
import Product from "./Product";

function Productlist({ Products }) {
  return (
    <div className="grid items-center grid-cols-2 space-x-3 space-y-8 md:grid-cols-4 ">
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
