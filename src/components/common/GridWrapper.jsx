import { CustomCatagoryTitle, ProductCard } from ".././pages";
const GridWrapper = ({ title, productArray }) => {
  return (
    <>
      <CustomCatagoryTitle title={title} />
      <div className="grid grid-cols-5 gap-4">
        {productArray.map((curElem, index) => {
          return <ProductCard key={index} {...curElem} />;
        })}
      </div>
    </>
  );
};

export default GridWrapper;
