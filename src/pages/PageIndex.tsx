import Nav from "@/components/navigation/Nav.tsx";
import PageLayout from "@/components/layouts/PageLayout.tsx";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@linaria/react";

const Outer = styled.div`
  flex: 1 1 0%;
  align-items: start;
  color: rgb(var(--color-white));
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: var(--space-32) 0;
  text-align: left;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );

  @media only screen and (width >= 768px) {
    padding: var(--space-20) 0 var(--space-20);
  }
`;
const Inner = styled.section`
  padding: 0 var(--space-4);
  max-width: var(--space-960px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;
const Header = styled.header`
  h1 {
  }
  p {
    margin: 0;
    font-size: var(--text-lg);
  }
`;
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;
const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;
const NavLinkText = styled.span`
  color: rgb(var(--color-white));
`;

interface GlobImport {
  [filePath: string]: () => Promise<any>;
}

const modules: GlobImport = import.meta.glob("./**/*.tsx");

const formatToKebabCase = (str: string) => {
  return str
    .replace("Page", "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};

const formatRoutePath = (routePath: string) => {
  if (routePath == "home") return "/";

  if (routePath == "404") return "*";

  return `/${routePath}`;
};

const routes = Object.keys(modules).map((filePath) => {
  const routePath = formatToKebabCase(filePath)
    .replace("./", "")
    .replace(".tsx", "");

  console.log("routePath", routePath);
  return {
    path:
      routePath === "404" || routePath === "home"
        ? null
        : formatRoutePath(routePath),
  };
});
console.log("routes", routes);
export default function PageIndex() {
  console.log(routes);

  return (
    <>
      <PageLayout>
        <Outer data-view-timeline="above_the_fold">
          <Inner>
            <Header>
              <h1>Index</h1>
            </Header>

            <Suspense fallback={<div>loading</div>}>
              <NavLinkContainer>
                {routes.map(({ path }) => {
                  if (!path) return null;
                  return (
                    <NavLink to={path} key={Math.random()}>
                      <NavLinkText>{path}</NavLinkText>
                    </NavLink>
                  );
                })}
              </NavLinkContainer>
            </Suspense>
          </Inner>

          <NavContainer>
            <Nav />
          </NavContainer>
        </Outer>
      </PageLayout>
    </>
  );
}
