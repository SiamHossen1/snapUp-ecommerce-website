import React from "react";
import useCartContext from "../../hooks/useCartContext";
import CartAmountToggle from "./CartAmountToggle";
import { BsTrash } from "react-icons/bs";
const CartItems = () => {
  const { cart, removeItem } = useCartContext();
  console.log(cart);
  const setIncrease = () => {
    // setAmount(amount + 1);
  };
  const setDecrease = () => {
    // amount <= 1 ? setAmount(amount) : setAmount(amount - 1);
  };
  return (
    <tbody>
      {cart.map((item, index) => {
        const { id, title, amount, price } = item;
        console.log(id, title, amount, price);
        let convertedPrice = parseFloat(
          price?.replace("$", "")?.replace(",", "")
        );
        return (
          <tr key={index}>
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4">
              <CartAmountToggle
                amount={amount}
                setDecrease={setIncrease(id)}
                setIncrease={setDecrease(id)}
              />
            </td>
            <td className="px-6 py-4">
              {(amount * convertedPrice).toFixed(2)}
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

{
  /* <div
key={index}
className=" bg-white flex items-center  pl-4 py-6 pr-28 shadow-lg text-slate-500"
>
<div className="flex items-center mr-36">
  <p className="mr-20">{index + 1}</p>
  <p>{elem.title}</p>
</div>
<div className="flex items-center">
  <p className="">{elem.price}</p>
  <p className="">{elem.amount}</p>
  <p className="">Total Price</p>
  <p className="">Remove</p>
</div>
</div> */
}
