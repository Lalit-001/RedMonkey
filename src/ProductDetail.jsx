import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { getProductData } from "./api";
import { Link } from "react-router-dom";
import Loading from "./LoadingPage";
import Error from "./ErrorPage";
import MyButton from "./MyButton";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const P = getProductData(id);
      P.then(function (productData) {
        setProduct(productData);
        setLoading(false);
        setCount(1);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange() {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (product == false) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  return (
    <>
      <div className="max-w-6xl m-auto my-8 bg-white md:mt-20">
        <Link to="/">
          {" "}
          <HiOutlineArrowCircleLeft className="mt-6 ml-6 text-3xl text-red-800 " />{" "}
        </Link>
        <div className="flex flex-col items-start p-3 m-6 md:flex-row md:gap-4 drop-shadow-lg drop-shadow-3xl ">
          <div className="max-w-md ">
            <img
              className="object-cover w-full mb-3 aspect-square"
              src={product.thumbnail}
            />
          </div>
          <div className="space-y-4">
            <h1 className="mb-1 text-3xl font-bold">{product.title}</h1>
            <span className="mb-1 text-base font-bold ">{product.brand} </span>
            <br></br>
            <h3 className="mb-1 text-base font-extrabold ">
              Rs. {product.price}
            </h3>
            <h3 className="mb-1 text-base italic font-extrabold text-black ">
              {" "}
              You got {product.discountPercentage} % dicount on this product .
            </h3>
            <span className="mb-1 text-base font-bold text-black ">
              only {product.stock} left
            </span>
            <p className="mb-1 text-gray-700">{product.description}</p>
            <input
              className="w-12 text-center border border-gray-600 "
              type="number"
              value={count}
              onChange={handleCountChange}
            />
            <button
              onClick={handleButtonClick}
              className="px-8 py-2 ml-2 rounded-md bg-primary-default hover:bg-primary-dark"
            >
              add to cart
            </button>
            <br></br>
            <span className="mt-2 text-gray-500">{product.category}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between p-8">
          <div>
            {id > 1 && (
              <Link to={"/Products/" + (id - 1)}>
                {" "}
                <MyButton content={"privious"} />
              </Link>
            )}
          </div>
          <div>
            {id < 30 && (
              <Link to={"/Products/" + (id + 1)}>
                {" "}
                <button className="px-4 border rounded-md hover:bg-primary-dark drop-shadow-xl border-primary-dark bg-primary-default">
                  {" "}
                  Next{" "}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
