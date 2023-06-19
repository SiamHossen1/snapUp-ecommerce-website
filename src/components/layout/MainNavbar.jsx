import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SearchProducts, NavbarProductCategories, SideNavbar } from "../pages";
import useDelayedUnmounting from "../../hooks/useDelayedUnmounting";
const MainNavbar = () => {
  const [state, show, hide] = useDelayedUnmounting(400);
  return (
    <div className="flex justify-between items-center py-2">
      {state !== "unmounted" && (
        <SideNavbar
          className={`${state === "unmounting" ? "end-animation" : ""}`}
          state={state}
          hide={hide}
          show={show}
        />
      )}
      <div className="flex items-center space-x-2">
        <GiHamburgerMenu
          className=" cursor-pointer"
          onClick={state === "mounted" ? hide : show}
        />
        <Link to="/" className="text-2xl">
          SnapUp.
        </Link>
      </div>
      <div>
        <SearchProducts />
        <NavbarProductCategories />
      </div>
      <div className="relative cursor-pointer">
        <BsFillCartFill className=" text-3xl" />
        <p className="absolute -top-4 -right-[0.75rem] bg-white rounded-[50%] text-orange-500 px-2 mt-2">
          1
        </p>
      </div>
    </div>
  );
};

export default MainNavbar;
