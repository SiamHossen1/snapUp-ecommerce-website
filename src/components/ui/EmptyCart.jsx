import React from "react";
import emptycart from "../../assets/images/emptyCart.jpg";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="py-12 text-center space-y-4">
      <img src={emptycart} alt="" className="w-48 mx-auto" />
      <p className=" text-zinc-600">Your Shoping Cart is Empty</p>
      <Link to="/">
        <button className=" bg-orange-600 text-white px-4 py-2 mt-4 mb-4">
          Go Shoping Now
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
