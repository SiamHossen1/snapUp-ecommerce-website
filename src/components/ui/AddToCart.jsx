import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartAmountToggle } from "../pages";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCartContext from "../../hooks/useCartContext";
const AddToCart = ({ title, id, offerPrice }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const notify = () =>
    toast.info("Item Added To The Cart", {
      position: "top-center",
      autoClose: 1000,
    });
  const setIncrease = () => {
    setAmount(amount + 1);
  };
  const setDecrease = () => {
    amount <= 1 ? setAmount(amount) : setAmount(amount - 1);
  };
  return (
    <div>
      <div className="flex items-center">
        <p className="mb-2 mr-4 mt-2">Quantity :</p>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <div className="mt-6 flex">
        <div onClick={notify}>
          <div
            className="w-36 px-4 py-2 flex items-center  bg-orange-500 border-[1px] border-orange-700 cursor-pointer hover:text-white transition-all"
            onClick={() => addToCart(id, title, offerPrice, amount)}
          >
            <AiOutlineShoppingCart />
            <p className="pl-2">Add To Cart</p>
          </div>
        </div>
        <ToastContainer />
        <Link to="/cart">
          <button className=" bg-orange-600 text-white p-2 ml-4">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
