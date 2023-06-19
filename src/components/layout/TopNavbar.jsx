import React from "react";
import { AiOutlineInstagram, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b-[1px] border-zinc-100/25">
      <div className="flex">
        <a href="#">Seller</a>
        <a
          href="#"
          className="border-zinc-100/25 border-l-[1px] border-r-[1px] px-4 mx-4 "
        >
          Download
        </a>
        <div className="flex items-center space-x-2">
          <a href="#">Follow us on</a>
          <BsFacebook className="cursor-pointer" />
          <AiOutlineInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center space-x-2">
          <AiOutlineQuestionCircle />
          <a href="#">Support</a>
        </div>
        <a
          href="#"
          className="border-zinc-100/25 border-l-[1px] border-r-[1px] px-4 mx-4"
        >
          Register
        </a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default TopNavbar;
