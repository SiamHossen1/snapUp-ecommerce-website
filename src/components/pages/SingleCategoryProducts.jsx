import React from "react";
import useProductContext from "../../hooks/useProductContext";
import GridWrapper from "../common/GridWrapper";

const SingleCategoryProducts = () => {
  const { singleCategoriesProductsLoading, singleCategoryProducts } =
    useProductContext();
  if (singleCategoriesProductsLoading) {
    return <p>Loading...</p>;
  }
  console.log(singleCategoryProducts[0].category);
  let title = singleCategoryProducts[0].category;
  return (
    <div className="bg-gray-100 px-20">
      <GridWrapper title={title} productArray={singleCategoryProducts} />
    </div>
  );
};

export default SingleCategoryProducts;
