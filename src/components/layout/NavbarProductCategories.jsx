import { Link } from "react-router-dom";
import useProductContext from "../../hooks/useProductContext";
const NavbarProductCategories = () => {
  const { categories, catagoriesLoading, getSingleCategoryProducts } =
    useProductContext();
  let sliceCatagories = categories.slice(0, 8);
  if (catagoriesLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex space-x-4 capitalize text-slate-100">
      {sliceCatagories.map((elem, index) => {
        return (
          <Link to="/singlecategory" key={index}>
            <p
              className="cursor-pointer"
              onClick={() => getSingleCategoryProducts(elem)}
            >
              {elem.replace(/-/g, " ")}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarProductCategories;
