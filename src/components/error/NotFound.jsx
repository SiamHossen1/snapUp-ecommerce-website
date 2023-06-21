import React from "react";
import notFound from "../../assets/images/404.jpg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <img className="w-96 mx-auto" src={notFound} alt="" />
      <Link to="/">
        <button className="text-white bg-orange-600 px-4 py-2 mb-6 block text-center mx-auto">
          Back To HomePage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
