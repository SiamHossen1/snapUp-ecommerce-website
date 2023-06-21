import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useProductContext from "../../hooks/useProductContext";
import { Link } from "react-router-dom";
const SearchProducts = () => {
  const { getSearchProduct } = useProductContext();
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="w-[1000px] flex items-center justify-between bg-white px-4 py-2 mb-2">
      <input
        type="text"
        placeholder="Search your preferred items here"
        className="text-black w-[700px] focus:outline-none"
        onChange={handleChange}
      />
      <Link to="/searchresult">
        <AiOutlineSearch
          className="text-2xl text-orange-500 ml-4 cursor-pointer"
          onClick={() => getSearchProduct(searchValue)}
        />
      </Link>
    </div>
  );
};

export default SearchProducts;
