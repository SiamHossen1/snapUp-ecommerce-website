import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

const useProductContext = () => {
  return useContext(ProductContext);
};
export default useProductContext;
