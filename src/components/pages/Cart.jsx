import useCartContext from "../../hooks/useCartContext";
import { CartItems, EmptyCart } from "../pages";
import { BsTrash } from "react-icons/bs";
const Cart = () => {
  const { clearCart, cart } = useCartContext();
  const tableHeader = [
    "S.N.",
    "Product",
    "Unit Price",
    "Quantity",
    "Total Price",
    "Delete",
  ];
  if (cart.length == 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="bg-gray-100 px-20 py-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {tableHeader.map((title, index) => {
                return (
                  <th
                    key={index}
                    className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <CartItems />
        </table>
        <div className="flex items-center justify-between">
          <p
            className="w-32 p-2 cursor-pointer flex items-center border-[1px] border-orange-400 text-orange-500 bg-zinc-100"
            onClick={clearCart}
          >
            <BsTrash /> CLEAR CART
          </p>
          <div>
            <p>Total ({cart.length} items)</p>
            <button className=" bg-orange-600 py-2 px-8 text-white mt-4">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
