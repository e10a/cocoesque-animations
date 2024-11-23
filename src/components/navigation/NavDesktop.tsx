import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";
import { styled } from "@linaria/react";

const Outer = styled.nav`
  box-shadow: 0 0 var(--space-2) rgba(var(--rgb-gray-950), 0.1);
  backdrop-filter: blur(5px);
  display: none;
  .nav-bar__logo {
    height: 50px;
  }
  .nav-bar__tabs {
    display: flex;
    gap: var(--space-4);
  }
  @media only screen and (width >=768px) {
    display: block;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-4);
  a {
    color: rgba(var(--rgb-gray-950));
  }
`;

export const NavDesktop = () => {
  return (
    <Outer id="nav-desktop" data-animate="nav_desktop">
      <Inner id="nav-desktop__inner" data-animate="nav-desktop__inner">
        <NavBarBrand />
        <NavBarTabs />
      </Inner>
    </Outer>
  );
};
