import { NavBarTab } from "./NavBarTab";

export const NavBarTabs = () => {
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
