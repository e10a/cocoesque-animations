import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";

export const NavMobile = () => {
  return (
    <nav id="nav-mobile" className="nav-bar__container">
      <div
        id="nav-mobile-inner"
        className="nav-bar flex-1 flex justify-between px-4"
      >
        <NavBarBrand />
        <NavBarTabs />
      </div>
    </nav>
  );
};
