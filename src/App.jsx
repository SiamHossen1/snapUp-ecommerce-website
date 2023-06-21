import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Cart,
  NotFound,
  SingleCategoryProducts,
  ProductDetails,
  UnderDevelopment,
  SearchResult,
} from "./components/pages";
const App = () => {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/singlecategory"
            element={<SingleCategoryProducts />}
          ></Route>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/searchresult" element={<SearchResult />}></Route>
          <Route path="/underdev" element={<UnderDevelopment />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
