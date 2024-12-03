// import PageHome from "@/pages/PageHome.tsx";
// import PageResume from "@/pages/PageResume.tsx";
import Page404 from "@/pages/Page404.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext.tsx";
import { lazy, Suspense } from "react";
// import PageAnimations from "./pages/css/PageAnimations";
// import PagePrototypePattern from "./pages/js/design-patterns/PagePrototypePattern";
// import PageAdapterPattern from "./pages/js/design-patterns/PageAdapterPattern";
// import PageDecoratorPattern from "./pages/js/design-patterns/PageDecoratorPattern";

const DevTools = lazy(() => import("@/components/DevTools.tsx"));

interface GlobImport {
  [filePath: string]: () => Promise<any>;
}

const modules: GlobImport = import.meta.glob("./pages/**/*.tsx");

const formatToKebabCase = (str: string) => {
  return str
    .replace("/Page", "/")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};

const formatRoutePath = (routePath: string) => {
  if (routePath == "home") return "/";

  if (routePath == "404") return "*";

  return `/${routePath}`;
};

const routes = Object.keys(modules).map((filePath) => {
  const Component = lazy(modules[filePath]!);

  const routePath = formatToKebabCase(filePath)
    .replace("./pages/", "")
    .replace(".tsx", "");

  return {
    path: formatRoutePath(routePath),
    component: Component,
  };
});

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <ResponsiveProvider>
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>
          <Analytics />
          <SpeedInsights />
          {import.meta.env.VITE_APP_ENV !== "production" && <DevTools />}
        </ResponsiveProvider>
      </Suspense>
    </>
  );
}

export default App;
