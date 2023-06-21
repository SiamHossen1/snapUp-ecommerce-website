import React from "react";
import { AiOutlineInstagram, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b-[1px] border-zinc-100/25">
      <div className="flex">
        <Link to="/underdev">
          <a href="#">Seller</a>
        </Link>
        <Link to="/underdev">
          <a
            href="#"
            className="border-zinc-100/25 border-l-[1px] border-r-[1px] px-4 mx-4 "
          >
            Download
          </a>
        </Link>
        <Link to="/underdev">
          <div className="flex items-center space-x-2">
            <a href="#">Follow us on</a>
            <BsFacebook className="cursor-pointer" />
            <AiOutlineInstagram className="cursor-pointer" />
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="flex items-center space-x-2">
          <AiOutlineQuestionCircle />
          <Link to="/underdev">
            {" "}
            <a href="#">Support</a>
          </Link>
        </div>
        <Link to="/underdev">
          <a
            href="#"
            className="border-zinc-100/25 border-l-[1px] border-r-[1px] px-4 mx-4"
          >
            Register
          </a>
        </Link>
        <Link to="/underdev">
          <a href="#">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
