import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://jrynlppcbsquzh8t.public.blob.vercel-storage.com/coco-icon-0jftvJAugPhOkZjuqrTNXOO2AZfcuO.svg"
          alt="Cocoesque Logo"
          width="36"
          height="36"
        />
      </NavLink>
    </div>
  );
};
