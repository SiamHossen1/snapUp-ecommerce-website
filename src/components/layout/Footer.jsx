import React from "react";

const Footer = () => {
  return (
    <div className=" bg-orange-600 py-6 text-white">
      <div className="flex justify-center items-center">
        <a href="#">PRIVACY POLICY</a>
        <a
          href="#"
          className="border-zinc-100/25 border-l-[1px] border-r-[1px] px-4 mx-4"
        >
          TERM OF SERVICE
        </a>
        <a href="#">About SnapUp</a>
      </div>
      <p className=" text-center mt-4">
        &#169; {new Date().getFullYear()} Shopee. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
