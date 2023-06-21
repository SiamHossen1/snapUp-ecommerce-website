import React from "react";
import underDev from "../../assets/images/under_development.jpg";
import { Link } from "react-router-dom";
const UnderDevelopment = () => {
  return (
    <div className="px-20 my-8">
      <h1 className="text-3xl text-center text-red-500">
        This Section Is Under Development
      </h1>
      <img className=" w-96 mx-auto" src={underDev} alt="" />
      <Link to="/">
        <button className="text-white bg-orange-600 px-4 py-2 mb-6 block text-center mx-auto">
          Back To HomePage
        </button>
      </Link>
    </div>
  );
};

export default UnderDevelopment;
