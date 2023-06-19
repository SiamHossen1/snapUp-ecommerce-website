import React from "react";

const CustomCatagoryTitle = ({ title }) => {
  return (
    <div className="py-8">
      <h1 className=" text-3xl shadow-2xl py-4 pl-8 text-gray-500 bg-white border-l-4 border-orange-500 capitalize">
        {title}
      </h1>
    </div>
  );
};

export default CustomCatagoryTitle;
