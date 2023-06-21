import React, { useState } from "react";

const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div>
      <div>
        <img className="w-72 mx-auto my-4" src={mainImage} alt="" />
      </div>
      <div className="flex gap-2">
        {images.map((elem, index) => {
          return (
            <img
              className="cursor-pointer w-28 shadow-md"
              src={elem}
              alt=""
              onClick={() => setMainImage(elem)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
