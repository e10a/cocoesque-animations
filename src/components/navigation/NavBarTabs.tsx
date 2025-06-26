import { lazy } from "react";

const NavBarTab = lazy(() => import("@/components/navigation/NavBarTab.tsx"));

export default function NavBarTabs() {
  return (
    <div className="nav-bar__tabs">
      <a className="nav-bar__tab" href="/#projects">
        Projects
      </a>
      <NavBarTab path="/resume" label="Resume" />
      <a className="nav-bar__tab" href="/#contact">
        Contact
      </a>
    </div>
  );
};
