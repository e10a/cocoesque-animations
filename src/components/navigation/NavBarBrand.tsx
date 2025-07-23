import { NavLink, useLocation } from "react-router-dom";
import { CocoIcon } from "@/svgs/CocoIcon";

export default function NavBarBrand() {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="nav-bar__brand" data-view-animate="nav-bar__brand">
      <NavLink to="/" onClick={handleClick}>
        <CocoIcon />
      </NavLink>
    </div>
  );
};
