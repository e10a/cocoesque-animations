import { lazy } from "react";
import { styled } from "@linaria/react";

const NavBarBrand = lazy(() => import("@/components/navigation/NavBarBrand.tsx"));
const NavBarTabs = lazy(() => import("@/components/navigation/NavBarTabs.tsx"));

const Outer = styled.nav`
  box-shadow: 0 0 var(--space-2) rgba(var(--color-gray-950) / 0.1);
  backdrop-filter: blur(5px);
  .nav-bar__logo {
    height: 50px;
  }
  .nav-bar__tabs {
    display: flex;
    gap: var(--space-4);
  }
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-4);
  a {
    color: rgb(var(--color-gray-950));
  }
`;

export default function Nav() {
  return (
    <Outer id="nav" data-view-animate="nav">
      <Inner id="nav__inner" data-view-animate="nav__inner">
        <NavBarBrand />
        <NavBarTabs />
      </Inner>
    </Outer>
  );
};
