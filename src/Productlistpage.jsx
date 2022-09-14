import React, { useEffect, useState } from "react";
import Productlist from "./Productlist";
import NoMatch from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./LoadingPage";
import { HiArrowNarrowRight } from "react-icons/hi";

function Productlistpage() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    const List = getProductList();
    List.then(function (products) {
      setProductList(products);
      setLoading(false);
    }).catch(function () {
      setLoading(false);
    });
  }, []);

  const data = productList.filter(function (item) {
    const lowercasequery = query.toLowerCase();
    const lowercasetittle = item.title.toLowerCase();

    return lowercasetittle.indexOf(lowercasequery) != -1;
  });

  if (sort == "HighToLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "lowToHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title > y.title ? 1 : -1;
    });
  }
  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortingChange(event) {
    setSort(event.target.value);
  }
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl p-3 mx-auto my-8 bg-white md:px-7 lg:px-8 xl:px-24 md:my-16 md:py-8 xl:py-20">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <input
            className="p-1 text-gray-400 border border-black rounded-md"
            value={query}
            placeholder="search  !"
            onChange={handleQueryChange}
          />
          <select
            className="text-gray-400 border border-black "
            onChange={handleSortingChange}
            value={sort}
          >
            <option value="default">Default sorting</option>
            <option value="HighToLow">short by prize: high to low </option>
            <option value="lowToHigh">short by prize: low to high</option>
            <option value="name">short by name: (A-Z)</option>
          </select>
        </div>
        <div className="justify-center max-w-6xl mx-auto">
          {data.length > 0 && <Productlist Products={data} />}
          {data.length == 0 && <NoMatch />}
        </div>
        <div className="flex gap-2 ">
          <button className="w-8 text-xl text-center border border-primary-dark hover:bg-primary-default">
            1
          </button>
          <button className="w-8 text-xl text-center border border-primary-dark hover:bg-primary-default">
            2
          </button>
          <button className="w-8 text-xl text-center border border-primary-dark hover:bg-primary-default">
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Productlistpage;
