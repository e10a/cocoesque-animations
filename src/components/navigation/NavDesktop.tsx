import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";

export const NavDesktop = () => {
  return (
    <nav id="nav-desktop" className="nav-bar__container">
      <div
        id="nav-desktop-inner"
        className="nav-bar flex-1 flex justify-between px-4"
      >
        <NavBarBrand />
        <NavBarTabs />
      </div>
    </nav>
  );
}
