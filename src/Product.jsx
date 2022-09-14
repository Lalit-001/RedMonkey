import React from "react";
import { Link } from "react-router-dom";
function Product({ thumbnail, title, category, price, id, rating }) {
  return (
    <div className="max-w-xs m-3 ">
      <div className="w-full aspect-square ">
        <img className="object-cover w-full h-full " src={thumbnail} />
      </div>
      <div className="text-gray-600">{category} </div>
      <div className="object-cover text-base font-bold">{title} </div>
      <div className="text-base font-bold ">Rs. {price}.00 </div>
      <div className="mb-1 text-base font-bold ">Rating : {rating}</div>
      <Link
        className="w-32 px-2 font-bold text-center border rounded-md bg-primary-light border-primary-dark hover:bg-primary-default"
        to={"/Products/" + id}
      >
        view details{" "}
      </Link>
    </div>
  );
}

export default Product;
