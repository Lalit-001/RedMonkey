import React, { useEffect, useState } from "react";
import Productlist from "./Productlist";
import NoMatch from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./LoadingPage";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import PageLink from "./Button.jsx/PageLink";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function Productlistpage() {
  const [productData, setProductData] = useState({});

  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);
  let { sort, query, page } = params;

  sort = sort || "default";
  query = query || "";
  page = page || 1;
  useEffect(
    function () {
      let sortBy;
      let sortType;
      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      }
      const List = getProductList(sortBy, query, page, sortType)
        .then(function (products) {
          setProductData(products);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [sort, query, page]
  );

  function handleQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value },
      { replace: false }
    );
  }

  function handleSortingChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value, page: 1 },
      { replace: false }
    );
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
      <div className="max-w-6xl p-8 mx-auto bg-white md:p-20">
        <div className="flex flex-col gap-2 ">
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
              <option value="highToLow">short by prize: high to low </option>
              <option value="lowToHigh">short by prize: low to high</option>
              <option value="title">short by name: (A-Z)</option>
            </select>
          </div>
        </div>
        <div className="justify-center max-w-6xl mx-auto">
          {productData.data.length > 0 && (
            <Productlist Products={productData.data} />
          )}
          {productData.data.length == 0 && <NoMatch />}
        </div>

        <div className="flex gap-2 mt-4 overflow-hidden">
          {page > 1 && (
            <PageLink
              to={"?" + new URLSearchParams({ ...params, page: +page - 1 })}
              className="px-2 py-1 text-lg font-bold text-center border border-gray-400 hover:bg-red-600 "
            >
              <HiArrowNarrowLeft />
            </PageLink>
          )}

          {productData.meta.last_page > 1 &&
            range(1, productData.meta.last_page + 1).map((pageNo) => (
              <Link
                to={"?" + new URLSearchParams({ ...params, page: pageNo })}
                key={pageNo}
                className={
                  "px-2 py-1 text-lg font-bold text-center border border-gray-400 hover:bg-red-600 " +
                  (pageNo == page ? "bg-red-600 " : "bg-white")
                }
              >
                {pageNo}
              </Link>
            ))}
          {page != productData.meta.last_page && (
            <PageLink
              to={"?" + new URLSearchParams({ ...params, page: +page + 1 })}
            >
              <HiArrowNarrowRight />
            </PageLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Productlistpage;
