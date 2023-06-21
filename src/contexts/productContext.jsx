import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/productReducer";
import {
  SET_CATEGORIES_LOADING,
  SET_CATEGORIES_DATA,
  SET_CATEGORIES_ERROR,
  SET_ALL_CATEGORIES_PRODUCTS_LOADING,
  SET_ALL_CATEGORIES_PRODUCTS_DATA,
  SET_ALL_CATEGORIES_PRODUCTS_ERROR,
  SET_SINGLE_CATEGORIES_PRODUCTS_LOADING,
  SET_SINGLE_CATEGORIES_PRODUCTS_DATA,
  SET_SINGLE_CATEGORIES_PRODUCTS_ERROR,
  SET_SINGLE_PRODUCT_LOADING,
  SET_SINGLE_PRODUCT_DATA,
  SET_SINGLE_PRODUCT_ERROR,
} from "../utils/strings";

const ProductContext = createContext();

const categories_api = "https://dummyjson.com/products/categories/";
const single_categorory_api = "https://dummyjson.com/products/category/";
const all_products_api = "https://dummyjson.com/products?limit=100";
const single_products_api = "https://dummyjson.com/products/";
const search_products_api = "https://dummyjson.com/products/search?q=";

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get All Categories Name
  const getCategories = async (categories_api) => {
    dispatch({ type: SET_CATEGORIES_LOADING });
    try {
      const res = await fetch(categories_api);
      const categories = await res.json();
      dispatch({ type: SET_CATEGORIES_DATA, payload: categories });
    } catch (error) {
      dispatch({ type: SET_CATEGORIES_ERROR });
    }
  };

  // Get All Category Products
  const getAllCategoryProducts = async (all_products_api) => {
    dispatch({ type: SET_ALL_CATEGORIES_PRODUCTS_LOADING });
    try {
      const res = await fetch(all_products_api);
      const allProducts = await res.json();
      dispatch({
        type: SET_ALL_CATEGORIES_PRODUCTS_DATA,
        payload: allProducts.products,
      });
    } catch (error) {
      dispatch({ type: SET_ALL_CATEGORIES_PRODUCTS_ERROR });
    }
  };

  // Get Single Category Products
  const getSingleCategoryProducts = async (name) => {
    dispatch({ type: SET_SINGLE_CATEGORIES_PRODUCTS_LOADING });
    try {
      const res = await fetch(`${single_categorory_api}${name}`);
      const singleCategoryProducts = await res.json();
      // console.log(singleCategoryProducts.products);
      dispatch({
        type: SET_SINGLE_CATEGORIES_PRODUCTS_DATA,
        payload: singleCategoryProducts.products,
      });
    } catch (error) {
      dispatch({ type: SET_SINGLE_CATEGORIES_PRODUCTS_ERROR });
    }
  };

  // Get Single Product
  const getProdcutDetails = async (id) => {
    dispatch({ type: SET_SINGLE_PRODUCT_LOADING });
    try {
      const res = await fetch(`${single_products_api}${id}`);
      const singleProduct = await res.json();
      dispatch({
        type: SET_SINGLE_PRODUCT_DATA,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: SET_SINGLE_PRODUCT_ERROR });
    }
  };

  const getSearchProduct = async (value) => {
    dispatch({ type: "SET_SEARCH_PRODUCT_LOADING" });
    try {
      const res = await fetch(`${search_products_api}${value}`);
      const searchResult = await res.json();
      dispatch({
        type: "SET_SEARCH_PRODUCT_DATA",
        payload: searchResult.products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories(categories_api);
  }, []);
  useEffect(() => {
    getAllCategoryProducts(all_products_api);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleCategoryProducts,
        getProdcutDetails,
        getSearchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
