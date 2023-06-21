import React from "react";
import useProductContext from "../../hooks/useProductContext";
import GridWrapper from "../common/GridWrapper";
import Loading from "../common/Loading";

const SingleCategoryProducts = () => {
  const { singleCategoriesProductsLoading, singleCategoryProducts } =
    useProductContext();
  if (singleCategoriesProductsLoading) {
    return <Loading />;
  }
  let title = singleCategoryProducts[0].category.replace(/-/g, " ");
  return (
    <div className="bg-gray-100 px-20">
      <GridWrapper title={title} productArray={singleCategoryProducts} />
    </div>
  );
};

export default SingleCategoryProducts;
