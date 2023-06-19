import { AiOutlineSearch } from "react-icons/ai";
const SearchProducts = () => {
  return (
    <div className="w-[1000px] flex items-center justify-between bg-white px-4 py-2 mb-2">
      <input
        type="text"
        placeholder="Search your preferred items here"
        className="text-black w-[700px] focus:outline-none"
      />
      <AiOutlineSearch className="text-2xl text-orange-500 ml-4 cursor-pointer" />
    </div>
  );
};

export default SearchProducts;
