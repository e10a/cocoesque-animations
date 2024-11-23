import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";
import { styled } from "@linaria/react";

const Outer = styled.nav`
  box-shadow: 0 0 10px rgba(var(--rgb-gray-950), 0.1);
  backdrop-filter: blur(5px);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
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
