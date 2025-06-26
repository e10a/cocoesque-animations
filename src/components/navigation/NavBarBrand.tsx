import { NavLink, useLocation } from "react-router-dom";

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
    <div className="nav-bar__brand">
      <NavLink to="/" onClick={handleClick}>
        <img
          className="nav-bar__logo"
          loading="lazy"
          src="https://jrynlppcbsquzh8t.public.blob.vercel-storage.com/coco-icon-0jftvJAugPhOkZjuqrTNXOO2AZfcuO.svg"
          alt="Cocoesque"
          width="36"
          height="36"
        />
      </NavLink>
    </div>
  );
};
