import React from "react";
import useCartContext from "../../hooks/useCartContext";
import CartAmountToggle from "./CartAmountToggle";
import { BsTrash } from "react-icons/bs";
const CartItems = () => {
  const { cart, removeItem, setDecrease, setIncrement } = useCartContext();
  return (
    <tbody className="divide-y divide-gray-200">
      {cart.map((item, index) => {
        const { id, title, amount, price } = item;
        let convertedPrice = parseFloat(
          price?.replace("$", "")?.replace(",", "")
        );
        return (
          <tr key={index} className="bg-white text-base text-zinc-700">
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4">
              <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrement(id)}
              />
            </td>
            <td className="px-6 py-4">
              {(amount * convertedPrice).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td className="px-6 py-4">
              <BsTrash
                className=" cursor-pointer"
                onClick={() => removeItem(id)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CartItems;
