import { Link } from "react-router-dom";
import useProductContext from "../../hooks/useProductContext";
const ProductCard = ({
  id,
  brand,
  category,
  title,
  discountPercentage,
  price,
  thumbnail,
}) => {
  const { getProdcutDetails } = useProductContext();
  return (
    <Link to={`/productdetails/${id}`} onClick={() => getProdcutDetails(id)}>
      <div className="shadow-lg w-56 mb-4 rounded-md relative cursor-pointer">
        <p className="absolute top-2 -left-1 custom-path after:content-[''] bg-orange-600 text-white px-2 shadow-md capitalize">
          {category.replace(/-/g, " ")}
        </p>
        <img src={thumbnail} alt="" className="w-full h-48 rounded-md" />
        <div className="py-4 px-2 text-center text-sm space-y-2">
          <p className="text-gray-500">
            Brand : <span className="text-black">{brand}</span>
          </p>
          <p className="text-gray-600">{title}</p>
          <div className="flex justify-around space-x-2 items-center">
            <p className="text-gray-400 line-through">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className=" text-base font-bold">
              {(price - price * (discountPercentage / 100)).toLocaleString(
                "en-US",
                { style: "currency", currency: "USD" }
              )}
            </p>
            <p className=" text-orange-500 font-medium">
              ({discountPercentage}% Off)
            </p>
          </div>
          <div className=" bg-orange-300 h-[2px] w-10 mx-auto"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
