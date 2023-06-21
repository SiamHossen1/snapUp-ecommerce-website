import { AiOutlineClose } from "react-icons/ai";
import useProductContext from "../../hooks/useProductContext";
import { Link } from "react-router-dom";
const SideNavbar = ({ className, state, hide, show }) => {
  const { categories, catagoriesLoading, getSingleCategoryProducts } =
    useProductContext();

  const formattedData = categories.map((item) => item.replace(/-/g, " "));

  return (
    <div
      className={`start-animation ${className} py-4 px-3 absolute top-0 left-0 bg-neutral-200 text-black h-screen z-50`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className=" font-medium">ALL CATEGORIES</p>
        <AiOutlineClose
          className=" text-xl cursor-pointer"
          onClick={state === "mounted" ? hide : show}
        />
      </div>
      <div className="h-[90vh] overflow-auto element-with-scrollbar">
        {categories.map((elem, index) => {
          return (
            <Link to="/singlecategory" key={index}>
              <p
                onClick={() => getSingleCategoryProducts(elem)}
                className=" text-zinc-600 border-b-[1px] border-zinc-300 leading-8 capitalize cursor-pointer hover:text-orange-500 hover:pl-2 transition-all"
              >
                {elem.replace(/-/g, " ")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
