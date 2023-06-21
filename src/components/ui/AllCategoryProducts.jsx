import useProductContext from "../../hooks/useProductContext";
import { GridWrapper, Loading } from ".././pages";
import shuffleArray from "../../utils/shuffleArray";
const AllCategoryProducts = () => {
  const { allCategoriesProductsLoading, allProducts, categories } =
    useProductContext();
  const shuffledArray = shuffleArray(allProducts);
  let smartPhones = allProducts.filter(
    (product) => product.category == categories[0]
  );
  let laptops = allProducts.filter(
    (product) => product.category == categories[1]
  );
  let fragrances = allProducts.filter(
    (product) => product.category == categories[2]
  );
  let skincare = allProducts.filter(
    (product) => product.category == categories[3]
  );
  if (allCategoriesProductsLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-100 px-20">
      <GridWrapper title="See Our Products" productArray={shuffledArray} />
      <GridWrapper title="Smart Phones" productArray={smartPhones} />
      <GridWrapper title="Laptops" productArray={laptops} />
      <GridWrapper title="Fragrances" productArray={fragrances} />
      <GridWrapper title="Skincare" productArray={skincare} />
    </div>
  );
};

export default AllCategoryProducts;
