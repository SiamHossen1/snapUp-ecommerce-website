import useProductContext from "../../hooks/useProductContext";
import Loading from "../common/Loading";
import ProductCard from "../common/ProductCard";

const SearchResult = () => {
  const { searchProductLoading, searchProduct } = useProductContext();
  if (searchProductLoading) {
    return <Loading />;
  }
  return (
    <div className="px-20 my-6">
      <h1 className="text-3xl text-zinc-700 mb-6">Search Result :</h1>
      <div className="grid grid-cols-5 gap-4">
        {searchProduct.map((curElem, index) => {
          return <ProductCard key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
