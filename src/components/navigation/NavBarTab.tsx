import { NavLink } from "react-router-dom";

export default function NavBarTab({ path, label }: { path: string; label: string }) {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        "nav-bar__tab " + (isActive ? "nav-bar__tab--active" : "")
      }
    >
      {label}
    </NavLink>
  );
};
