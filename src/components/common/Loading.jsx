import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
const Loading = ({}) => {
  return (
    <CircleLoader
      className="text-center mx-auto my-6"
      color={"#ffa141"}
      size={50}
    />
  );
};

export default Loading;
