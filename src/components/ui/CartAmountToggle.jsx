import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex">
      <button onClick={() => setDecrease()} className="px-2 border-2">
        <FaMinus />
      </button>
      <p className="px-4 border-2">{amount}</p>
      <button onClick={() => setIncrease()} className="px-2 border-2">
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
