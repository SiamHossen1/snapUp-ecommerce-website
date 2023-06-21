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

const initialState = {
  catagoriesLoading: false,
  catagoriesError: false,
  categories: [],
  allCategoriesProductsLoading: false,
  allCategoriesProductsLoadingError: false,
  allProducts: [],
  singleCategoriesProductsLoading: false,
  singleCategoriesProductsLoadingError: false,
  singleCategoryProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
  searchProductLoading: false,
  searchProduct: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // Handle Categories
    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        catagoriesLoading: true,
      };
    case SET_CATEGORIES_DATA:
      return {
        ...state,
        catagoriesLoading: false,
        categories: action.payload,
      };
    case SET_CATEGORIES_ERROR:
      return {
        ...state,
        catagoriesLoading: false,
        catagoriesError: true,
      };

    // Handle All Categories Products
    case SET_ALL_CATEGORIES_PRODUCTS_LOADING:
      return {
        ...state,
        allCategoriesProductsLoading: true,
      };
    case SET_ALL_CATEGORIES_PRODUCTS_DATA:
      return {
        ...state,
        allCategoriesProductsLoading: false,
        allProducts: action.payload,
      };
    case SET_ALL_CATEGORIES_PRODUCTS_ERROR:
      return {
        ...state,
        allCategoriesProductsLoading: false,
        allCategoriesProductsLoadingError: true,
      };

    // Handle Single Category Products
    case SET_SINGLE_CATEGORIES_PRODUCTS_LOADING:
      return {
        ...state,
        singleCategoriesProductsLoading: true,
      };
    case SET_SINGLE_CATEGORIES_PRODUCTS_DATA:
      return {
        ...state,
        singleCategoriesProductsLoading: false,
        singleCategoryProducts: action.payload,
      };
    case SET_SINGLE_CATEGORIES_PRODUCTS_ERROR:
      return {
        ...state,
        singleCategoriesProductsLoading: false,
        singleCategoriesProductsLoadingError: true,
      };

    // Handle Single Product
    case SET_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        singleProductLoading: true,
      };
    case SET_SINGLE_PRODUCT_DATA:
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case SET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };

    case "SET_SEARCH_PRODUCT_LOADING":
      return {
        ...state,
        searchProductLoading: true,
      };

    case "SET_SEARCH_PRODUCT_DATA":
      return {
        ...state,
        searchProductLoading: false,
        searchProduct: action.payload,
      };

    default:
      return state;
  }
};
export { initialState, reducer };
