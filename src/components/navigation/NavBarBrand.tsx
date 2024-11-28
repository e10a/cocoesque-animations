import { NavLink } from "react-router-dom";

export default function NavBarBrand() {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://jrynlppcbsquzh8t.public.blob.vercel-storage.com/coco-icon-0jftvJAugPhOkZjuqrTNXOO2AZfcuO.svg"
          alt="Cocoesque"
          width="50"
          height="50"
        />
      </NavLink>
    </div>
  );
};
