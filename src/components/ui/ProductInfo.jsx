import React from "react";
import { AddToCart } from "../pages";
const ProductInfo = ({
  title,
  id,
  description,
  brand,
  category,
  rating,
  price,
  discountPercentage,
}) => {
  const offerPrice = (
    price -
    price * (discountPercentage / 100)
  ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  return (
    <div>
      <p className=" text-black text-xl font-medium">{title}</p>
      <div className=" h-[1px] w-full bg-gray-100 my-2"></div>
      <p className=" text-slate-600">{description}</p>
      <div className="flex mt-2">
        <p className=" text-orange-500">
          Rating: <span className="text-slate-700">{rating}</span>
        </p>
        <p className="text-orange-500 border-orange-500/50 border-l-[2px] border-r-[2px] px-4 mx-4">
          Brand: <span className="text-slate-700 capitalize">{brand}</span>
        </p>
        <p className=" text-orange-500">
          Category:{" "}
          <span className="text-slate-700 capitalize">
            {category.replace(/-/g, " ")}
          </span>
        </p>
      </div>
      <div className="mt-4 bg-gray-100/50 px-4 py-6 mb-4">
        <div className="flex items-center">
          <p className="line-through text-gray-400">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <span className="pl-2 text-slate-500">(Inclusive of all taxes)</span>
        </div>
        <div className="mt-2">
          <p className=" text-2xl font-medium text-orange-600 relative">
            {(price - price * (discountPercentage / 100)).toLocaleString(
              "en-US",
              { style: "currency", currency: "USD" }
            )}
            <span className="ml-2 absolute bg-orange-600 text-white text-sm px-2 rounded-sm font-medium">
              {discountPercentage}% OFF
            </span>
          </p>
        </div>
      </div>
      <AddToCart title={title} id={id} offerPrice={offerPrice} />
    </div>
  );
};

export default ProductInfo;
