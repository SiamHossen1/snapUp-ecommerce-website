import React from "react";
import useProductContext from "../../hooks/useProductContext";
import { ProductImageGallery, ProductInfo, Loading } from "../pages";
const ProductDetails = () => {
  const { singleProductLoading, singleProduct } = useProductContext();
  const { images } = singleProduct;
  if (singleProductLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-100 px-20 py-10">
      <div className="grid grid-cols-2 gap-6 py-4 px-2 bg-white shadow-lg rounded">
        <ProductImageGallery images={images} />
        <ProductInfo {...singleProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
